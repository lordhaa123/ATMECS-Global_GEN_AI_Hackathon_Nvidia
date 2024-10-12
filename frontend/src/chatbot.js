import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

// Chatbot component
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]); 

  // Save chat history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  const formatResponse = (text) => {
    return text;
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Convert **text** to <strong>
      .replace(/\n\n/g, "<br/><br/>") // Convert double newlines to line breaks
      .replace(/\n/g, "<br/>") // Convert single newline to a line break
      .replace(/\•/g, "<ul><li>") // Convert bullet points
      .replace(/\<\/li><br\/>/g, "</li>"); // Close li elements properly
  };
  

  const handleSendMessage = async () => {
    if (userInput.trim()) {
      // Add user's message to chat history
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { message: userInput, sender: "user" },
      ]);

      const userInputLocal = userInput;
  
      // Clear input field after sending message
      setUserInput("");


      try {
        // Send POST request to the API with the user input
        const response = await axios.post('http://localhost:8000/postRequest', {
          prompt: userInputLocal, // send the user's input as JSON
        });
  
        // Assuming the API returns a message in the response, handle the bot's response
        const botMessage = response.data; // adjust if API response structure differs
  
        // Add bot's message to chat history
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { message: formatResponse(botMessage), sender: "bot" }, // Bot's response from API
        ]);
      } catch (error) {
        // In case of error, handle it gracefully by adding an error message
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { message: "Error: Could not get response from the server.", sender: "bot" },
        ]);
      }
  
    }
  };
  

  const renderMessageWithLink = (message) => {
    // Split the message into lines
    const lines = message.trim().split('\n');

    // Check if there are multiple lines and the last line is a URL
    const lastLine = lines.pop();

    const endpoint = lastLine.split('/').pop();

    return (
      <div>
        {/* Render all lines except the last one */}
        {lines.length > 0 && <ReactMarkdown>{lines.join('\n')}</ReactMarkdown>}

        {/* Render the last line as a link */}
        <p>
          <a href={lastLine}>
            {endpoint}
          </a>
        </p>
      </div>
    );
  };


  return (
    <div>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} style={styles.chatbotButton}>
          Use Chatbot
        </button>
      )}

      {isOpen && (
        <div style={styles.chatWindow}>
          <div style={styles.chatHeader}>
            <h4>Chatbot</h4>
            <button onClick={() => setIsOpen(false)} style={styles.closeButton}>
              ✖
            </button>
          </div>

<div style={styles.chatMessages}>
  {chatHistory.map((entry, index) => (
    <div key={index} style={styles.message}>
      <strong>{entry.sender}: </strong>
      {entry.sender === "bot" ? (
          renderMessageWithLink(entry.message)
      ) : (
        <span>{entry.message}</span> // Render user's message normally
      )}
    </div>
  ))}
</div>

          <div style={styles.inputContainer}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type a message..."
              style={styles.input}
            />
            <button onClick={handleSendMessage} style={styles.sendButton}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Some basic styling for the chatbot
const styles = {
  chatbotButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '15px 30px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  chatWindow: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '600px', // Increased    width
    height: '600px', // Increased height
    backgroundColor: '#fff',
    borderRadius: '20px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  chatHeader: {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '15px',
    fontSize: '18px',
    textAlign: 'center',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '18px',
    cursor: 'pointer',
  },
  chatMessages: {
    flex: 1,
    padding: '15px',
    overflowY: 'auto',
    backgroundColor: '#f4f4f8',
  },
  message: {
    marginBottom: '10px',
  },
  inputContainer: {
    display: 'flex',
    borderTop: '1px solid #ddd',
    padding: '10px',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
  sendButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};


export default Chatbot;
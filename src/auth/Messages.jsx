import { useEffect, useState } from "react";
import "../messages.css"
import {NavigationBar} from "../auth/NavigationBar"

function Messages() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    // Fetch data from your Firebase Realtime Database endpoint
    fetch('https://ebook-b1fdf-default-rtdb.firebaseio.com/userDataRecords.json')
      .then((response) => response.json())
      .then((data) => {
        // Convert the data into an array of messages
        const messageArray = Object.values(data);

        // Set the messages state
        setMessages(messageArray);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
  };

  return (
    <div className="admin-messages-container">
        <NavigationBar/>
      <div className="admin-messages">
        <h1>Users Enquiries</h1>
        <div className="message-list">
          <ul>
            {messages.map((message, index) => (
              <li key={index} onClick={() => handleSelectMessage(message)}>
                {message.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="message-details">
        {selectedMessage && (
          <div>
            <h2>{selectedMessage.subject}</h2>
            <p>Email: {selectedMessage.email}</p>
            <p>Message: {selectedMessage.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export {Messages};

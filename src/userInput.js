import React, { useState } from "react";

const UserInputComponent = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSendButtonClick = () => {
    // Handle sending the input to an API (to be implemented)
    console.log("Sending input:", { name, phoneNumber, message });
  };

  const handleResetButtonClick = () => {
    // Reset all input fields
    setName("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <div className="user-input-container">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <textarea
        placeholder="Enter your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        id="send-button"
        className="send-button"
        onClick={handleSendButtonClick}
      >
        Send
      </button>

      <button
        id="reset-button"
        className="reset-button"
        onClick={handleResetButtonClick}
      >
        Reset
      </button>
    </div>
  );
};

export default UserInputComponent;

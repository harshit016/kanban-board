import React from "react";
import "../styles/TicketStyles.css";

const TicketCard = ({ ticket }) => {
  const { id, title, tag } = ticket;

  return (
    <div className="ticket-card">
      {/* Add a static image to the top-right corner */}
      <img
        src="path-to-your-default-image.jpg" // Replace with your actual image path
        alt="User Avatar"
        className="ticket-card-top-right-image"
      />
      <div style={{ color: "lightgray" }}>{id}</div>
      <label>
        <input type="radio" name="ticket-title" />
        {title}
      </label>
      <p>{tag.join(", ")}</p>
    </div>
  );
};

export default TicketCard;
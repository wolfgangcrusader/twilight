import React, { useState } from "react";

const CharacterCard = ({ title, image, description, details }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className="character-card" onClick={() => setIsExpanded(!isExpanded)}>
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <p>{isExpanded ? details : description}</p>
        {isExpanded && <p>{details}</p>}
      </div>
  );
};

export default CharacterCard;
// Tooltip.js
import React, { useState } from 'react';


function Tooltip({ text, children }) {
  const [isVisible, setIsVisible] = useState(false);

  // Event handlers to show and hide the tooltip
  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div 
      className="tooltip" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && <div className="tooltiptext">{text}</div>}
    </div>
  );
}

export default Tooltip;

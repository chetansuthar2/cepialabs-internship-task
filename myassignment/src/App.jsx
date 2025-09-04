import { useState } from "react";
import { sculptureList } from "./data";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const sculpture = sculptureList[index];

  // Next image (simple loop)
  function handleImageClick() {
    setIndex((index + 1) % sculptureList.length);
    setShowMore(false);
  }

  // Toggle description (button click only)
  function handleToggleDescription() {
    setShowMore(!showMore);
  }

  return (
    <div className="card">
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>

      <img
        src={sculpture.url}
        alt={sculpture.alt}
        onClick={handleImageClick}
        className="sculpture-img"
        title="Click to see next image"
      />

      {/* Instruction line - always visible */}
      <p className="hint">👉 Click on image to go next</p>

      {/* Show/Hide Button */}
      <button className="toggle-btn" onClick={handleToggleDescription}>
        {showMore ? "Hide Details" : "Show Details"}
      </button>

      {showMore && <p className="description">{sculpture.description}</p>}
    </div>
  );
}

export default App;

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

  // Toggle description
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
        onDoubleClick={handleToggleDescription}
        className="sculpture-img"
        title="Click for next | Double click for details"
      />

      {/* Instruction line - always visible */}
      <p className="hint">
        👉 Click on image to go next | Double click to show/hide details
      </p>

      {showMore && <p className="description">{sculpture.description}</p>}
    </div>
  );
}

export default App;

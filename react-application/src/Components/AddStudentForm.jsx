import { useState } from "react";

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) { setError("Student name is required."); return; }
    if (score === "" || isNaN(score) || score < 0 || score > 100) {
      setError("Score must be between 0 and 100."); return;
    }
    onAdd(name.trim(), score);
    setName("");
    setScore("");
    setError("");
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <span className="form-label">● REGISTER STUDENT</span>
        <span className="form-label">NEW ENTRY</span>
      </div>
      <div className="form-row">
        <input
          className="form-input"
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-input score-input"
          type="number"
          placeholder="Score (0-100)"
          value={score}
          min="0"
          max="100"
          onChange={(e) => setScore(e.target.value)}
        />
        <button className="add-btn" onClick={handleSubmit}>+ ADD</button>
      </div>
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
}

export default AddStudentForm;
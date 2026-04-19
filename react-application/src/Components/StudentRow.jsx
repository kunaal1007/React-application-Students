import { useState } from "react";

function StudentRow({ student, onUpdateScore }) {
  const [inputScore, setInputScore] = useState(student.score);
  const isPassing = student.score >= 40;

  const handleSave = () => {
    if (inputScore >= 0 && inputScore <= 100) {
      onUpdateScore(student.id, inputScore);
    }
  };

  return (
    <tr className="student-row">
      <td className="td-name">{student.name}</td>
      <td className={isPassing ? "score-pass" : "score-fail"}>{student.score}</td>
      <td>
        <span className={`status-badge ${isPassing ? "pass" : "fail"}`}>
          {isPassing ? "● PASS" : "● FAIL"}
        </span>
      </td>
      <td className="td-update">
        <input
          className="update-input"
          type="number"
          min="0"
          max="100"
          value={inputScore}
          onChange={(e) => setInputScore(Number(e.target.value))}
        />
        <button className="save-btn" onClick={handleSave}>SAVE</button>
      </td>
    </tr>
  );
}

export default StudentRow;
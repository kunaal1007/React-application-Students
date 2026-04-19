import { useState } from "react";
import Header from "./components/Header";
import AddStudentForm from "./components/AddStudentForm";
import StudentTable from "./components/StudentTable";
import "./App.css";

const initialStudents = [
  { id: 1, name: "Kunaal", score: 100 },
  { id: 2, name: "Ayush", score: 90 },
  { id: 3, name: "Karan", score: 22 },
  { id: 4, name: "Neha", score: 68 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, score: Number(newScore) } : s
      )
    );
  };

  const totalStudents = students.length;
  const passedStudents = students.filter((s) => s.score >= 40).length;
  const avgScore =
    totalStudents > 0
      ? Math.round(students.reduce((sum, s) => sum + s.score, 0) / totalStudents)
      : 0;

  return (
    <div className="app">
      <Header />
      <AddStudentForm onAdd={addStudent} />
      <div className="stats-bar">
        <div className="stat-card">
          <span className="stat-label">TOTAL</span>
          <span className="stat-value">{totalStudents}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">PASSED</span>
          <span className="stat-value passed">{passedStudents}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">AVG. SCORE</span>
          <span className="stat-value avg">{avgScore}</span>
        </div>
      </div>
      <StudentTable students={students} onUpdateScore={updateScore} />
      <footer className="footer">
        <span>ACADEMIC TERMINAL</span>
        <span>KRMU EDITION</span>
      </footer>
    </div>
  );
}

export default App;
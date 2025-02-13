import { useState } from "react";
import "./App.css";
import Description from "./components/Description.jsx";
import Options from "./components/Options.jsx";
import Feedback from "./components/Feedback.jsx";

const initialStats = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [stats, setStats] = useState(initialStats);

  const updateFeedback = (feedbackType) => {
    setStats((prevStats) => ({
      ...prevStats,
      [feedbackType]: prevStats[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setStats(initialStats);
  };

  return (
    <div className="container">
      <Description />
      <Options
        onFeedback={updateFeedback}
        stats={stats}
        onReset={resetFeedback}
      />
      <Feedback stats={stats} />
    </div>
  );
}

export default App;
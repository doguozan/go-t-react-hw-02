import styles from "./Feedback.module.css";

function Feedback({ stats }) {
    const { good, neutral, bad } = stats;
    const totalFeedback = good + neutral + bad;

    if (totalFeedback === 0) {
        return (
            <ul className={styles.list}>
                <li>
                    <p>No feedback yet</p>
                </li>
            </ul>
        );
    }

    const positivePercentage = Math.round((good / totalFeedback) * 100);
    const neutralPercentage = Math.round((neutral / totalFeedback) * 100);
    const badPercentage = Math.round((bad / totalFeedback) * 100);

    // Calculate gradient colors based on positive percentage
    const getGradientColor = (percentage) => {
        if (percentage <= 33) {
            return `linear-gradient(135deg, #ef4444 0%, #f59e0b 100%)`; // red to yellow
        } else if (percentage <= 66) {
            return `linear-gradient(135deg, #f59e0b 0%, #22c55e 100%)`; // yellow to green
        } else {
            return `linear-gradient(135deg, #22c55e 0%, #15803d 100%)`; // green to dark green
        }
    };

    return (
        <ul className={styles.list}>
            <li>
                <p>
                    Good: {good} ({positivePercentage}%)
                </p>
            </li>
            <li>
                <p>
                    Neutral: {neutral} ({neutralPercentage}%)
                </p>
            </li>
            <li>
                <p>
                    Bad: {bad} ({badPercentage}%)
                </p>
            </li>
            <li style={{ background: getGradientColor(positivePercentage) }}>
                <p>Positive feedback: {positivePercentage}%</p>
            </li>
        </ul>
    );
}

export default Feedback;

import styles from "./Options.module.css";

function Options({ onFeedback, stats, onReset }) {
    const totalFeedback = stats.good + stats.neutral + stats.bad;

    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                onClick={() => onFeedback("good")}
                type="button"
            >
                <p>Good</p>
            </button>
            <button
                className={styles.button}
                onClick={() => onFeedback("neutral")}
                type="button"
            >
                <p>Neutral</p>
            </button>
            <button
                className={styles.button}
                onClick={() => onFeedback("bad")}
                type="button"
            >
                <p>Bad</p>
            </button>

            {totalFeedback > 0 && (
                <button className={styles.button} onClick={onReset} type="button">
                    <p>Reset</p>
                </button>
            )}
        </div>
    );
}

export default Options;

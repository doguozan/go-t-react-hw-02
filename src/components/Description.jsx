import styles from "./Description.module.css";

function Description() {
    return (
        <>
            <h1 className={styles.title}>Sip Happens Cafe</h1>
            <p className={styles.description}>
                Please leave your feedback about our service by selecting one of the
                options below.
            </p>
        </>
    );
}

export default Description;
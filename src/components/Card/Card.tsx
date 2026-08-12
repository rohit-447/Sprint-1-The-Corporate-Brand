import "../../App.css";
import styles from "./Card.module.css";
const Card = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["logo-container"]}>
        01
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="11"
              cy="11"
              r="6"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M16 16L21 21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
      <h1>Heading</h1>
      <p>Be found by the people already looking for what you do.</p>
      <p>Visibility that compounds</p>
    </div>
  );
};
export default Card;

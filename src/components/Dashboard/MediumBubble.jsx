import styles from "../../styles/dashboard.module.css";

export const MediumBubble = ({top, left}) => {
  return (
    <div style={{top: top, left: left}} className={styles.mediumBubble}></div>
  )
}

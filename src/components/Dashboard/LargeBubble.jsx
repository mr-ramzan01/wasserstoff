import styles from "../../styles/dashboard.module.css";

export const LargeBubble = ({left, top}) => {
  return (
    <div style={{left: left, top: top}} className={styles.largeBubble}></div>
  )
}

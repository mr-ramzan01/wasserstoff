import styles from "../../styles/dashboard.module.css";

export const SmallBubble = ({top, left}) => {
  return (
    <div style={{top: top, left: left}} className={styles.smallBubble}></div>
  )
}

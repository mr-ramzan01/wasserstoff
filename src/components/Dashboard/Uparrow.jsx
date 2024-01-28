import styles from "../../styles/dashboard.module.css";

export const Uparrow = ({color}) => {
  return (
    <div style={{borderBottom: `8px solid ${color}`}} className={styles.uparrow}></div>
  )
}

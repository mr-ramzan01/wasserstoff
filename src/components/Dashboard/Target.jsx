import React from 'react'
import styles from "../../styles/dashboard.module.css";

export const Target = () => {
  return (
    <div className={styles.progress1}>
        <div className={styles.progress3}>
            <div className={styles.innerCircle}>
                <div className={styles.diamondOutter}>
                </div>
                    <div className={styles.diamondInner}></div>
            </div>
        </div>

        {/* Adding progress bar in inner target */}
        <svg width="100" height='100' className={styles.barProgressInner}> 
            <circle r='42' cx='50' cy='50' className={styles.circle}></circle>
            <circle r='42' cx='50' cy='50' className={styles.inner_circle_progress}></circle>
        </svg>

        {/* Adding progress bar in outer target */}
        <svg width="120" height='120' className={styles.barProgressOuter}> 
            <circle r='56' cx='60' cy='60' className={styles.circleOuter}></circle>
            <circle r='56' cx='60' cy='60' className={styles.outer_circle_progress1}></circle>
            <circle r='56' cx='60' cy='60' className={styles.outer_circle_progress2}></circle>
        </svg>
    </div>
  )
}

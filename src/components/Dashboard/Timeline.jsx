import React from 'react'
import styles from "../../styles/dashboard.module.css";

export const Timeline = ({dataTime, setDataTime}) => {
  return (
    <div className={styles.timeline}>
        <p>Timeline</p>
        <div>
            <p onClick={() => setDataTime('1week')} className= {dataTime === '1week' ? `${styles.current_timeline}` : ''}>1W</p>
            <p onClick={() => setDataTime('1month')} className= {dataTime === '1month' ? `${styles.current_timeline}` : ''}>1M</p>
            <p onClick={() => setDataTime('3months')} className= {dataTime === '3months' ? `${styles.current_timeline}` : ''}>3M</p>
            <p onClick={() => setDataTime('1year')} className= {dataTime === '1year' ? `${styles.current_timeline}` : ''}>1Y</p>
            <p onClick={() => setDataTime('all')} className= {dataTime === 'all' ? `${styles.current_timeline}` : ''}>ALL</p>
        </div>
    </div>
  )
}

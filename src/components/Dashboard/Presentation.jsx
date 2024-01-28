import React from 'react'
import styles from "../../styles/dashboard.module.css";

export const Presentation = ({data}) => {
  return (
    <div className={styles.presentation}>
        <div>
            <h6>Presentation</h6>
            <p>{data.presentation}</p>
            <div className={styles.curve_div}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <svg viewBox="0 0 700 200">
                    <path 
                        id="curve"
                        d="M 29.928125,119.32884 C 59.868756,78.85387 99.789596,30.283895 138.66049,30.104515 c 80.46172,-0.37133 90.87185,137.794285 140.7729,129.699295 40.35037,-6.54568 49.90105,-80.94994 86.53937,-78.86548 33.24073,1.89117 22.2547,70.77048 73.14399,70.77048 39.92084,0 58.65264,-56.66496 99.80211,-56.66496 49.90105,0 69.86147,80.94995 99.8021,48.56997" 
                        style={{fill: 'none', stroke: '#8676FF', strokeWidth: 10,}} />
                </svg>
            </div>
        </div>
        <div>
            <h6>Development</h6>
            <p>{data.development}</p>
            <div className={styles.curve_div}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <svg viewBox="0 0 700 200">
                    <path 
                        id="curve"
                        d="M 29.928125,119.32884 C 59.868756,78.85387 99.789596,30.283895 138.66049,30.104515 c 80.46172,-0.37133 90.87185,137.794285 140.7729,129.699295 40.35037,-6.54568 49.90105,-80.94994 86.53937,-78.86548 33.24073,1.89117 22.2547,70.77048 73.14399,70.77048 39.92084,0 58.65264,-56.66496 99.80211,-56.66496 49.90105,0 69.86147,80.94995 99.8021,48.56997" 
                        style={{fill: 'none', stroke: '#FF708B', strokeWidth: 10,}} />
                </svg>
            </div>
        </div>
        <div>
            <h6>Research</h6>
            <p>{data.research}</p>
            <div className={styles.curve_div}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <svg viewBox="0 0 700 200">
                    <path 
                        id="curve"
                        d="M 29.928125,119.32884 C 59.868756,78.85387 99.789596,30.283895 138.66049,30.104515 c 80.46172,-0.37133 90.87185,137.794285 140.7729,129.699295 40.35037,-6.54568 49.90105,-80.94994 86.53937,-78.86548 33.24073,1.89117 22.2547,70.77048 73.14399,70.77048 39.92084,0 58.65264,-56.66496 99.80211,-56.66496 49.90105,0 69.86147,80.94995 99.8021,48.56997" 
                        style={{fill: 'none', stroke: '#FFBA69', strokeWidth: 10,}} />
                </svg>
            </div>
        </div>
    </div>
  )
}

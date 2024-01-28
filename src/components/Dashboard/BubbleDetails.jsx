import React from 'react'
import styles from "../../styles/dashboard.module.css";

export const BubbleDetails = ({data}) => {
  return (

    // Data Details
    <div className={styles.bubble_details}>
        <div>
            <div>
            <span className="material-symbols-outlined">radio_button_checked</span>
            </div>
            <p>Trend Goods</p>
            <h1>{data.trend_goods}</h1>
        </div>
        <div>
            <div>
            <span className="material-symbols-outlined">visibility</span>
            </div>
            <p>Shopping views</p>
            <h1>{data.shopping_views}</h1>
        </div>
        <div>
            <div>
            <span className="material-symbols-outlined">equalizer</span>
            </div>
            <p>Store Dynamics</p>
            <h1>{data.store_dynamics}</h1>
        </div>
    </div>
  )
}

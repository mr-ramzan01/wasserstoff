import React from "react";

import styles from "../../styles/overview.module.css";

const Sidebar = () => {
  return (
    <div className={styles.overview_details}>
      <h2>WSTF-FRONT-END-HAKATHON</h2>
      <div className={styles.all_users}>
        <div>
          <h5>All Users</h5>
          <div>
            <p>DETAIL</p>
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.17202 4.99984L0.343018 2.17184L1.75702 0.756836L6.00002 4.99984L1.75702 9.24284L0.343018 7.82784L3.17202 4.99984Z"
                fill="#383874"
              />
            </svg>
          </div>
        </div>
        <h1>24,31,340</h1>
      </div>
      <div className={styles.data_details}>
        <div>
          <div className={styles.data_details_earning}>
            <span className="material-symbols-outlined">whatshot</span>
          </div>
          <div>
            <p>Total earning</p>
            <h6>5,40,549</h6>
          </div>
        </div>
        <div>
          <div className={styles.data_details_sales}>
            <span className="material-symbols-outlined">real_estate_agent</span>
          </div>
          <div>
            <p>Sales</p>
            <h6>12,05,677</h6>
          </div>
        </div>
        <div>
          <div className={styles.data_details_purchase}>
            <span className="material-symbols-outlined">equalizer</span>
          </div>
          <div>
            <p>Purchase</p>
            <h6>48,430,039</h6>
          </div>
        </div>
      </div>
      <div className={styles.users}>
        <div className={styles.active_users}>
          <div>
            <svg>
              <circle
                r="33"
                cx="40"
                cy="40"
                className={styles.active_users_bar}
              ></circle>
              <circle
                r="33"
                cx="40"
                cy="40"
                className={styles.active_users_progress}
              ></circle>
            </svg>
            <h5 className={styles.percent}>26%</h5>
          </div>
          <div>
            <h6>92,990</h6>
            <p>Active users</p>
          </div>
        </div>
        <div className={styles.new_users}>
          <div>
            <svg>
              <circle
                r="33"
                cx="40"
                cy="40"
                className={styles.new_users_bar}
              ></circle>
              <circle
                r="33"
                cx="40"
                cy="40"
                className={styles.new_users_progress}
              ></circle>
            </svg>
            <h5 className={styles.percent}>87%</h5>
          </div>
          <div>
            <h6>22,652</h6>
            <p>New users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

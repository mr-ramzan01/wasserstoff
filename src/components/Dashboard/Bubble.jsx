import React from "react";
import styles from "../../styles/dashboard.module.css";
import { BubbleDetails } from "./BubbleDetails";
import { BubbleFunctionality } from "./BubbleFunctionality";
import { LargeBubble } from "./LargeBubble";
import { MediumBubble } from "./MediumBubble";
import { MediumBubble2 } from "./MediumBubble2";
import { SmallBubble } from "./SmallBubble";
import { Timeline } from "./Timeline";

export const Bubble = ({ data, zoom, setZoom, dataTime, setDataTime }) => {
  return (
    // Whole div of bubble data
    <div
      style={{
        width: `calc(100% + ${zoom}px)`,
        height: `calc(100% + ${zoom}px)`,
      }}
      className={styles.bubbles}
    >
      {/* OuterBubble */}
      <div className={styles.outerBubble}>
        <div className={styles.innerBubble}>
          {/* Investment Bubble */}
          <div className={styles.investmentBubble}>
            <div>
              <h5>Investments</h5>
              <h4>${data.investment_price}</h4>
              <p>3 month</p>
            </div>
          </div>

          {/* Finance Bubble */}
          <div className={`${styles.financeBubble} ${styles.bubble}`}>
            <div>
              <h5>Finance</h5>
              <h4>${data.finance}</h4>
            </div>
          </div>

          {/* Business Bubble */}
          <div className={`${styles.businessBubble} ${styles.bubble}`}>
            <div>
              <h5>Business</h5>
              <h4>${data.business_price}</h4>
            </div>
          </div>

          {/* Design Bubble */}
          <div className={`${styles.designBubble} ${styles.bubble}`}>
            <div>
              <h5>Design</h5>
              <h4>${data.design}</h4>
              <p>3 month</p>
            </div>
          </div>

          {/* Development Bubble */}
          <div className={`${styles.developmentBubble} ${styles.bubble}`}>
            <div>
              <h5>Development</h5>
              <h4>${data.development_price}</h4>
            </div>
          </div>

          {/* Random Pink Bubbles different sizes inside inner bubble */}
          <div className={styles.pinkBubble}></div>
          <SmallBubble top={"15%"} left={"22%"} />
          <SmallBubble top={"30%"} left={"83%"} />
          <SmallBubble top={"68%"} left={"73%"} />
          <SmallBubble top={"70%"} left={"0"} />
          <MediumBubble top={"18%"} left={"35%"} />
          <MediumBubble top={"18%"} left={"35%"} />
          <MediumBubble top={"70%"} left={"90%"} />
          <MediumBubble top={"47%"} left={"13%"} />
          <MediumBubble top={"90%"} left={"13%"} />
        </div>
        <div className={styles.yellowBubble}></div>
      </div>

      {/* Random Bubbles with different sizes and colors outerside innnerbubble  */}
      <LargeBubble top={"20%"} left={"80%"} />
      <LargeBubble top={"40%"} left={"70%"} />
      <LargeBubble top={"70%"} left={"60%"} />
      <LargeBubble top={"60%"} left={"15%"} />
      <MediumBubble top={"90%"} left={"13%"} />
      <MediumBubble top={"90%"} left={"13%"} />
      <MediumBubble top={"20%"} left={"13%"} />
      <MediumBubble2 top={"35%"} left={"25%"} />
      <MediumBubble2 top={"45%"} left={"15%"} />
      <MediumBubble2 top={"85%"} left={"85%"} />
      <Timeline dataTime={dataTime} setDataTime={setDataTime} />
      <BubbleDetails data={data} />
      <BubbleFunctionality zoom={zoom} setZoom={setZoom} />
    </div>
  );
};

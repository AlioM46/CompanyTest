import React from "react";
import subImg1 from "../../../../public/subImg1.jpg";
import subImg2 from "../../../../public/subImg2.jpg";
import Image from "next/image";
import "./history.css";
const History = () => {
  return (
    <section id="history" className="history">
      <div className="history-content container">
        <div className="history-text">
          <h4>History</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            harum, praesentium ab quasi voluptas sit provident at vel dolores
            cum accusamus, placeat corporis in fugiat tempore cumque ex
            perferendis sint?
          </p>
        </div>

        {/*  */}

        <div className="history-slider">
          <div className="history-slider-images">
            <Image src={subImg1} alt="Person Stay in The Mountain" />
            <Image src={subImg2} alt="Mountain With Sky" />
            <Image src={subImg1} alt="Person Stay in The Mountain" />
            <Image src={subImg2} alt="Mountain With Sky" />
          </div>

          <div className="history-slider-bubbles">
            <ul>
              <li className="active"></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;

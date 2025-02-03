import React from "react";
import { Chrono } from "react-chrono";

const CustomTimeline: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Chrono
        mode="HORIZONTAL"
        theme={{
          primary: "Tomato",
          secondary: "LightGray",
          cardBgColor: "transparent",
          cardForeColor: "transparent",
          titleColor: "DodgerBlue",
        }}
        lineStyle={{ stroke: "purple", strokeWidth: 3 }}
        toolbarPosition="BOTTOM"
        cardHeight={0}
        cardWidth={0}
        items={[
          {
            title: "Step 1",
          },
          {
            title: "Step 2",
          },
          {
            title: "Step 3",
          },
        ]}
      >
        <div className="chrono-icons">
            <img src="src\timelines\ant\shape_circle.png" height={60} width={60} alt="image1" />
            <img src="src\timelines\ant\shape_circle.png" alt="image2" />
        </div>
      </Chrono>
    </div>
  );
};

export default CustomTimeline;

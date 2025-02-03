import React from "react";
import { Timeline } from "antd";

const HorizontalTimeline: React.FC = () => {
  return (
    <Timeline mode="alternate">
      <Timeline.Item>Start</Timeline.Item>
      <Timeline.Item>Plan</Timeline.Item>
      <Timeline.Item>Execute</Timeline.Item>
      <Timeline.Item>Complete</Timeline.Item>
    </Timeline>
  );
};

export default HorizontalTimeline;

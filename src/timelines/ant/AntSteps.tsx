import React from 'react';
//import type { StepsProps } from 'antd';
import { Steps } from 'antd'; // Popover,
import { CheckCircleOutlined, LoadingOutlined, ClockCircleOutlined } from '@ant-design/icons';

// const customDot: StepsProps['progressDot'] = (dot, { status, index }) => (
//   <Popover
//     content={
//       <span>
//         step {index} status: {status}
//       </span>
//     }
//   >
//     {dot}
//   </Popover>
// );
const description = 'You can hover on the dot.';
const AntSteps: React.FC = () => (
  <Steps
    current={1}
    //progressDot={customDot}
    items={[
      {
        title: 'Finished',
        description,
        icon: <CheckCircleOutlined style={{ color: 'green' }} />,
      },
      {
        title: 'In Progress',
        description,
        icon: <LoadingOutlined style={{ color: 'blue' }} />,
      },
      {
        title: 'Waiting',
        description,
        //icon: <img src="./shape_circle.svg" style={{ width: 24, height: 24 }} />,
        icon: <ClockCircleOutlined style={{ color: 'gray' }} />,
      },
      {
        title: 'Waiting',
        description,
        icon: <ClockCircleOutlined style={{ color: 'gray' }} />,
      },
    ]}
  />
);

export default AntSteps;
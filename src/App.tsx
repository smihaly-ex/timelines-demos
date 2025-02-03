// import { Box } from '@mui/material'
import { Divider } from 'antd'
import './App.css'
import AntDesignTimeline from './timelines/ant/AntDesignTimeline'
import AntSteps from './timelines/ant/AntSteps'
import { MUITimeline } from './timelines/mui/MUITimeline'
// import { ReactUIUtilsTimeline } from './timelines/reactuiutils/Timeline'
// import { ReactVerticalTimeline } from './timelines/reactverticaltimeline/Timeline'
// import { MDBTimeline } from './timelines/mdb/Timeline'
// import Timeline from './timelines/crono/Timeline'
import { PrimeTimeline } from './timelines/primereact/PrimeTimeline'
import { MDBTimeline } from './timelines/mdb/MDBTimeline'
import SuiteTimeline from './timelines/suite/SuiteTimeline'
import CronoTimeline from './timelines/crono/CronoTimeline'
import CustomTimeline from './timelines/crono/CustomChronoTimeline'
import StepNavigation from './timelines/mui/StepsMUI'
import FormWizardSample from './timelines/wizard/WizardSteps'

function App() {

  return (
    <>
      {/* <Box sx={{ height: 50 }} >
        <ReactUIUtilsTimeline />
      </Box>
      <Box sx={{ height: 50 }} >
        <ReactVerticalTimeline />
      </Box> */}
      {/* <Box sx={{ height: 50 }} >
        <MDBTimeline />
      </Box> */}
      {/* <Timeline /> */}
      <PrimeTimeline />
      <Divider />

      <MUITimeline />
      <Divider />

      <AntDesignTimeline />
      <Divider />

      <AntSteps />
      <Divider style={{paddingBottom: 50}}/>

      <MDBTimeline />
      <Divider style={{paddingBottom: 50}}/>

      <SuiteTimeline />
      <Divider style={{paddingBottom: 50}}/>

      <CronoTimeline />
      <Divider style={{paddingBottom: 50}}/>

      <CustomTimeline />
      <Divider style={{paddingBottom: 50}}/>

      <StepNavigation />
      <Divider style={{paddingBottom: 50}}/>

      <FormWizardSample />
      <Divider style={{paddingBottom: 50}}/>
    </>
  )
}

export default App

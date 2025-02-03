import {
    Action,
    Event,
    Subtitle,
    Timeline,
    Title,
  } from '@reactuiutils/horizontal-timeline';
  import { FaBug, FaRegCalendarCheck } from 'react-icons/fa';
  
  export const ReactUIUtilsTimeline = () => {
    return (
      <Timeline minEvents={6}>
        {/* Without action */}
        <Event color="#87a2c7" icon={FaRegCalendarCheck}>
          <Title>Agendado</Title>
          <Subtitle>26/03/2019 09:51</Subtitle>
        </Event>
  
        {/* With action */}
        <Event color="red" icon={FaBug}>
          <Title>Erro</Title>
          <Subtitle>26/03/2019 09:51</Subtitle>
          <Action onClick={() => alert('clicou')}>Detalhes</Action>
        </Event>
  
        {/* Without title, subtitle and action */}
        <Event color="darkGreen" icon={FaRegCalendarCheck} />
      </Timeline>
    );
  };
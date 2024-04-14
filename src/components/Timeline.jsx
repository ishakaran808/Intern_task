import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'Navbar.css';

// Define WorkIcon component
const WorkIcon = () => <></>;

// Define timeline data
const events = [
  {
    start: new Date('2011'),
    end: new Date('present'),
    position: 'Creative Director',
    company: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading'
  },
  // Add more timeline data as needed
];

// Function to get year from date
const getYear = (date) => date.getFullYear();

const ReactVerticalTimelineComponent = () => {
  return (
    <VerticalTimeline>
      {events.map((data, index) => (
        <VerticalElement key={index} data={data} />
      ))}
    </VerticalTimeline>
  );
};

const VerticalElement = ({ data }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={`${getYear(data.start)} - ${data.end ? getYear(data.end) : 'present'}`}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">{data.position}</h3>
      <h4 className="vertical-timeline-element-subtitle">{data.company}</h4>
      <p>{data.description}</p>
    </VerticalTimelineElement>
  );
};

export default ReactVerticalTimelineComponent;

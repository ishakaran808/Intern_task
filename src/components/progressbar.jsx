import "./Navbar.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const WorkIcon = () => <></>;

export default function App() {
  return (
    <div className="App">
     <h1 style={{ fontSize: '1rem' }}>Wrong with self-improvement & how we're fixing it</h1>
     <h2 style={{ fontSize: '2.1rem', fontWeight: 'bold' }}>Self-improvement ugh.</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">It's not as eay as 1-2-3</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Old habits are hard to break. </h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            And bad behaviours die hard. Fortunately, we give you great, science-backed techniques to use.
          </p>
        </VerticalTimelineElement>
    
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">You and your motivation don't have a long-term relationships.</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Luckily we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Books just don't offer practical solutions.</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        {/* Other VerticalTimelineElement components */}
      </VerticalTimeline>
    </div>
  );
}

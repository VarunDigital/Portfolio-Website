import React from 'react';
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experiences() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#04194a'>
          <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='April, 2018 - March, 2019' iconStyle={{background: '#04194a', color: '#fff'}} 
          icon={<i className="fa-2x fab fa-graduation-cap" style={{color: 'white'}}></i>}>
            <h3 className='vertical-timeline-element-title'>
              D.S.B.M. Sr. Sec. School, Aligarh
            </h3>
            <p>High School(10th)</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='April, 2020 - July, 2021' iconStyle={{background: '#04194a', color: '#fff'}} 
          icon={<i className="fa-2x fab fa-graduation-cap" style={{color: 'white'}}></i>}>
            <h3 className='vertical-timeline-element-title'>
              D.S.B.M. Sr. Sec. School, Aligarh
            </h3>
            <p>Intermediate(12th)</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='Sep, 2021 - Present' iconStyle={{background: '#04194a', color: '#fff'}} 
          icon={<i className="fa-2x fab fa-graduation-cap" style={{color: 'white'}}></i>}>
            <h3 className='vertical-timeline-element-title'>
              ITM Group of Institution, Aligarh
            </h3>
            <p>Bachelor of Technology(B. Tech.)</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='Jan, 2022 - April, 2022' iconStyle={{background: '#04194a', color: '#fff'}} 
          icon={<i className="fa-2x fab fa-graduation-cap" style={{color: 'white'}}></i>}>
            <h3 className='vertical-timeline-element-title'>
              Bish Digital, Gr. Noida
            </h3>
            <p>Front End Engineer</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='July, 2022 - Present' iconStyle={{background: '#04194a', color: '#fff'}} 
          icon={<i className="fa-2x fab fa-graduation-cap" style={{color: 'white'}}></i>}>
            <h3 className='vertical-timeline-element-title'>
              Uproi Digital, Noida
            </h3>
            <p>Front End Engineer</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}
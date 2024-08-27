import './Scroller.css';

import React from 'react'
import ReactDOM from 'react-dom'

const TAGS = ['HTML', 'CSS', 'javaScript', 'typeScript', 'tailwind', 'React', 'Next.js', 'dp[i]', 'dijkstra', 'SVG', 'cp', 'webdev', 'toposort', 'binSearch', 'dfs', 'lambdas', 'git'];
const DURATION = 35000;
const TAGS_PER_ROW = 15;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className='tag'><span>#</span> {text}</div>
);

function Scroller() {
  console.log("inside Scroller");

  return <div className='app'>
    <div className='tag-list'>
        <InfiniteLoopSlider  duration={random(DURATION - 5000, DURATION + 5000)}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag text={tag} key={tag}/>
          ))}
        </InfiniteLoopSlider>
      <div className='fade'/>
    </div>
  </div>
};

export default Scroller;


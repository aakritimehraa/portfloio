import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './toggle';
import Header from './components/Header';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedCursor from 'react-animated-cursor';

function App() {
  return (
    <div className="max-w-[100%] w-[95%] md:w-[70%] m-auto">
      {/* Add Animated Cursor */}
      <AnimatedCursor
        innerSize={8}
        outerSize={32}
        color="221, 87, 137" 
        outerAlpha={0.2}
        innerScale={1}
        outerScale={1.5}
        clickables={[
          'a',
          'button',
          '.link',
          '.cursor-pointer',
        ]}
      />
      
      <Header />
      <Banner />
      <hr className="mt-[10%] border-black-600 dark:border-gray-600"></hr>
      <Projects />
      <hr className="mt-[10%] border-black-600 dark:border-gray-600"></hr>
      <Contact />
    </div>
  );
}

export default App;

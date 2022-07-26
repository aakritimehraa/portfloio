import logo from './logo.svg';
import './App.css';
import Toggle from './toggle';
import Header from './components/Header';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
   
   <div className="max-w-[100%] w-[95%] md:w-[70%] m-auto">
   <Header />
   <Banner />
   <hr className='mt-[10%] border-black-600 dark:border-gray-600'></hr>
   <Projects />

   <hr className='mt-[10%] border-black-600 dark:border-gray-600'></hr>
   <Contact />
   
    </div>
  );
}

export default App;

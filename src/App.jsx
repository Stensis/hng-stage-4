import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Navbar from './pages/Navbar';
import Dots from './pages/Dots';
import LandingPage from './pages/LandingPage';
import LineGradient from './Components/LineGradient';
import MySkills from './pages/MySkills';
import Projects from './pages/Projects';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isPageTop, setIsPageTop] = useState(true);
  const isAboveMediumScreen = useMediaQuery({ query: '(min-width:1060px)' });

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY === 0 ? setIsPageTop(true) : setIsPageTop(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app bg-black'>
      <Navbar isPageTop={isPageTop} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <LandingPage setSelectedPage={setSelectedPage} />
      <LineGradient />
      <div className='w-5/6 mx-auto'>
        <MySkills />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto'>
        <Projects />
      </div>
    </div>
  );
};

export default App;



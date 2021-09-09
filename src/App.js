import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import { InfoData } from './data/InfoData';
import { sliderData } from './data/sliderData';
import GlobalStyle from './globalStyles';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <GlobalStyle/>
    <Navbar toggle={toggle}/>
    <Hero slides={sliderData}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <InfoSection {...InfoData}/>
    </>

  );
}

export default App;

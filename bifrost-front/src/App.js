import { useState } from 'react';
import './App.css';
import InputShortener from './components/InputShortener';
import BackgroundAnimate from './components/BackgroundAnimate';
import LinkResult from './components/LinkResult';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;

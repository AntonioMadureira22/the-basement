import './App.css';

import tv from './images/tv.jpg'
import sound from './audio/static.wav'

function App() {
  return (
    <div className="App">
      <img className='tv1' src={tv} alt='tv' />
      <div className='text'>
        <div className='disappear'>
          <span>T</span>
          <span>H</span>
          <span>E</span>
          <span>B</span>
          <span>A</span>
          <span>S</span>
          <span>E</span>
          <span>M</span>
          <span>E</span>
          <span>N</span>
          <span>T</span>
        </div>
      </div>
      <div className='player'>
      <audio controls autoPlay>
        <source src={sound}></source>
      </audio>
      </div>
    </div>
    
  );
}

export default App;

import './App.css';
import image from './img/logojs.png';
import ReactPlayer from 'react-player';
function App() {
  return (
    <div className="all">
      <h1> Your name here</h1>
       <br/>
       <img src={image} alt="myimage" />
        <br/>
       <img src={"/logo512.png"} alt="myimage1" />
    <ReactPlayer className="vid" controls url='https://www.youtube.com/watch?v=7sDY4m8KNLc' />
    </div>
  );
}

export default App;

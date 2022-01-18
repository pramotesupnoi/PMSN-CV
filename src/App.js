import './App.css';
import TopProfile from './components/TopProfile';
import AboutMe from './components/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactGA from 'react-ga';

function App() {
  const TRACKING_ID = "UA-216979659-2";
  ReactGA.initialize(TRACKING_ID);
  
  return (
    <div className="container-lg py-3">
      <div className="row">
        <TopProfile />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;

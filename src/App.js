import logo from './logo.svg';
import './App.css';
import TopProfile from './components/TopProfile';
import AboutMe from './components/AboutMe';

function App() {
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

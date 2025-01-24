import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Abouts } from './components/Abouts';
import { FutureProjects } from './components/FutureProjects';
import { AwardsAndRecognitions } from './components/AwardsAndRecognitions';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Abouts />
      <FutureProjects />
      <AwardsAndRecognitions />
      <Footer />
    </div>
  );
}

export default App;

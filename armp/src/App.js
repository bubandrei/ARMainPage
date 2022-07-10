import './App.css';
import MainView from './components/main/MainView';
import Navbar from './components/navbar/Navbar';
import TopInfo from './components/topInfo/TopInfo';


const App = () => {
  return (
    <div>
      <TopInfo />
      <Navbar />
      <MainView />
    </div >
  );
}

export default App;

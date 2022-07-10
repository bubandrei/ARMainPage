import './App.css';
import Case from './components/case/Case';
import MainView from './components/main/MainView';
import Navbar from './components/navbar/Navbar';
import TopInfo from './components/topInfo/TopInfo';


const App = () => {
  return (
    <div>
      <TopInfo />
      <Navbar />
      <MainView />
      <Case/>
    </div >
  );
}

export default App;

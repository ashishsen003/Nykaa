import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import SignUp from './components/SignUp';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './components/Navbar';

function App() {

  return (
    <div >
      <Topbar />
      <Navbar />
      <AllRoutes />
      {/* <SignUp /> */}
    </div>
  );
}

export default App;

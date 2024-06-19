
import Login from './pages/login';
import Registration from './pages/registration';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ServiceProvider from './pages/service_provider/serviceProfile';
import UserScreen from './pages/userScreen.jsx/userScreen';
function App() {
  return (
    <Router><Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/serviceProvider" element={<ServiceProvider />}></Route>
      <Route path="/userScreen" element={<UserScreen />}></Route>
      <Route path="/driver" element={<Driver />}></Route>

     
    </Routes></Router>
  );
}

export default App;


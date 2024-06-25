
import Login from './pages/login';
import SignUp from './pages/signUp';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import DriverScreen from './pages/driver';
import UserScreen from './pages/userScreen';
import ServiceProvider from './pages/serviceProvider';
import ServiceDetails from './components/user/serviceDetailUser';
import OrderPlace from './components/user/orderPlace';
function App() {
  return (
    <Router><Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/serviceProvider" element={<ServiceProvider />}></Route>
      <Route path="/userScreen" element={<UserScreen />}></Route>
      <Route path="/driver" element={<DriverScreen />}></Route>
      <Route path="/serviceDetailUser" element={<ServiceDetails />}></Route>
      <Route path="/orderPlace" element={<OrderPlace />}></Route>


    </Routes></Router>
  );
}

export default App;


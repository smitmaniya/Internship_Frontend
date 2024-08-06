
import Login from './pages/login';
import SignUp from './pages/signUp';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import DriverScreen from './pages/driver';
import UserScreen from './pages/userScreen';
import ServiceProvider from './pages/serviceProvider';
import ServiceDetails from './components/user/serviceDetailUser';
import OrderPlace from './components/user/orderPlace';
import ProfileUser from './components/user/profileUser';
import LandingPage from './pages/landingPage';
import ForgotPassword from './pages/forgot-password';
import ThankYou from './components/user/thanku';
function App() {
  return (
    <Router><Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/serviceProvider" element={<ServiceProvider />}></Route>
      <Route path="/userScreen/:id" element={<UserScreen />}></Route>
      <Route path="/driver" element={<DriverScreen />}></Route>
      <Route path="/serviceDetailUser/:serviceProviderId" element={<ServiceDetails />} /> {/* Updated Route */}
      <Route path="/orderPlace" element={<OrderPlace />}></Route>
      <Route path="/profileUser" element={<ProfileUser />}></Route>

      <Route path="/landingPage" element={<LandingPage />}></Route>
      <Route path="/thanku" element={<ThankYou/>}></Route>



    </Routes></Router>
  );
}

export default App;


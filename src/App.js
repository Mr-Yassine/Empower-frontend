import { BrowserRouter as Router, Route } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';

// import Home from './pages';
import Courses from './pages/Courses';
import Formation from './pages/Formation';
import Formateur from './pages/Formateur';
import AddFormation from './pages/AddFormation';

import Contact from './pages/Contact';
import Learning from './pages/Learning';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import NotFound from './NotFound/NotFound';
import Footer from "./Components/Footer";








function App() {

  return (

    <Router>
      <div className="App">
        <Navbar />


            <Route 
               path="/Courses"
              component={Courses}>
              <Courses />
            </Route>

            <Route 
               path="/Contact"
              component={Contact}>
              <Contact />
            </Route>


            <Route 
               path="/Learning"
              component={Learning}>
              <Learning />
            </Route>

            <Route 
               path="/Profile"
              component={Profile}>
              <Profile />
            </Route>

            <Route 
               path="/Notifications"
              component={Notifications}>
              <Notifications />
            </Route>

            <Route 
              path="/Formation"
              component={Formation}>
              <Formation />
            </Route>
            
            <Route 
              path="/Formateur"
              component={Formateur}>
              <Formateur />
            </Route>

            <Route 
              path="/AddFormation"
              component={AddFormation}>
              <AddFormation />
            </Route>
            
            
            <Route 
              path="/NotFound"
              component={NotFound}>
            </Route>


      </div>

      <Footer />

    </Router>
  );
}

export default App;

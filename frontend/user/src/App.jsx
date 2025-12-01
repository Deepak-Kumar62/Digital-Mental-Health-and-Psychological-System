import { Routes, Route } from "react-router-dom";
import UserView from "./components/UserView";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Chatbot from "./pages/ChatBot";
import Counselling from "./pages/Counselling";
import Resources from "./pages/Resources";
import Forum from "./pages/Forum";
import Activities from "./pages/Activities";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Assessment from "./pages/Assessment";
import MoodTracker from "./pages/MoodTracker";
import Auth from "./pages/Auth";

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/" element={<UserView />}>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="chatbot" element={<Chatbot />} />
        <Route path="counselling" element={<Counselling />} />
        <Route path="counselling" element={<Counselling />} />
        <Route path="resources" element={<Resources />} />
        <Route path="forum" element={<Forum />} />
        <Route path="activities" element={<Activities />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="assessment" element={<Assessment />} />
        <Route path="mood" element={<MoodTracker />} />
      </Route>

    </Routes>
  )
}

export default App

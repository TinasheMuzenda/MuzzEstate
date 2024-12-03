import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Agent from "./pages/Agent";
import NotFound from "./components/NotFound";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import ContactBanner from "./components/contacts/ContactBanner";
import ContactInformation from "./components/contacts/ContactInformation";
import ContactMap from "./components/contacts/ContactMap";
import Footer from "./components/Footer";
import CreateListing from "./pages/CreateListing";
import ProtectedRoutes from "./components/utils/ProtectedRoutes";
import About from "./pages/About";

const AppRoutes = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* <Navbar /> */}
      {/* <ContactBanner /> */}
      {/* <ContactInformation /> */}
      {/* <ContactMap /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/our-story" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/agent" element={<Agent />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRoutes;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Mushrooms } from "./Pages/Products/Mushrooms";
import { Home } from "./Pages/Home";
import { Exotics } from "./Pages/Products/Exotics";
import { Microgreens } from "./Pages/Products/Microgreens";
import { AboutUs } from "./Pages/AboutUs";
import { MeetFounder } from "./Pages/MeetFounder";
import { Layout } from "./Pages/Layout";
import Blog from "./Pages/Admin/Blog";
import AdminLayout from "./Pages/Admin/AdminLayout";
import Blogs from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDeatil";
import Services from "./Pages/Services";
import Training from "./Pages/Training";
import ContactUs from "./Pages/ContactUs";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Dashboard from "./Pages/Admin/Dashboard";
import Login from "./Pages/Login";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/mushrooms" element={<Mushrooms />} />
            <Route path="/exotics" element={<Exotics />} />
            <Route path="/microgreens" element={<Microgreens />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/training" element={<Training />} />
            <Route path="/meet-founder" element={<MeetFounder />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/blogs/:slug" element={<BlogDetails />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="blog" element={<Blog />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

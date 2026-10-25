import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import FeaturedOffer from "./components/FeaturedOffer/FeaturedOffer";
import TourPackages from "./components/TourPackages/TourPackages";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import ContactCTA from "./components/ContactCTA/ContactCTA";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

import AdminEnquiries from "./pages/Admin/AdminEnquiries";
import AdminLogin from "./pages/Admin/AdminLogin";

import "./App.css";


function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <Services />
                <FeaturedOffer />
                <TourPackages />
                <WhyChooseUs />
                <ContactCTA />
            </main>

            <Footer />
            <WhatsAppButton />
        </>
    );
}


function ProtectedAdmin() {
    const isLoggedIn = localStorage.getItem("adminLoggedIn");

    if (isLoggedIn !== "true") {
        return <Navigate to="/admin-login" replace />;
    }

    return <AdminEnquiries />;
}


function App() {
    return (
        <BrowserRouter>

            <Routes>

                {/* Customer Website */}
                <Route
                    path="/"
                    element={<Home />}
                />

                {/* Admin Login */}
                <Route
                    path="/admin-login"
                    element={<AdminLogin />}
                />

                {/* Protected Admin Dashboard */}
                <Route
                    path="/admin"
                    element={<ProtectedAdmin />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Courses from "../components/Courses";
import HeroSection from "../components/HeroSection";
import heroImg from "../assets/keming-tan-xMygEKgsnes-unsplash.jpg";

const Home = () => {
  const [welcomeMsg, setWelcomeMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await fetch("http://localhost:5000/users/home", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (res.ok) {
          setWelcomeMsg(data.message);
        } else {
          setWelcomeMsg("Not authorized. Please login again.");
        }
      } catch (err) {
        setWelcomeMsg("Error loading data.");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <HeroSection
        backgroundImage={heroImg}
        title="Together We’ll Explore New Things"
        subtitle={welcomeMsg || "Loading..."}
        buttonText="Sign Up"
        buttonLink="/signup"
      />
      <Courses />
      <Footer />
    </>
  );
};

export default Home;

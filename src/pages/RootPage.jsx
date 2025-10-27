import Nav from '../components/Nav';
import Footer from '../components/Footer';
import HeroSection from "../components/HeroSection";
import heroImg from "../assets/keming-tan-xMygEKgsnes-unsplash.jpg";

const RootPage = () => {
  return (
    <>
      <Nav />
      <HeroSection
        backgroundImage={heroImg}
        title="Together We’ll Explore New Things"
        subtitle="We believe everyone should have the opportunity to create progress through technology."
        buttonText="Sign Up"
        buttonLink="/signup"
      />
      <Footer />
    </>
  )
}

export default RootPage;

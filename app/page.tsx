import Navbar from "./components/Navbar";
import HeroImageContainer from "./components/HeroImage";
import EventDetails from "./components/EventDetails";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-light-yellow">
        <Navbar />
        <HeroImageContainer />
        <EventDetails />
      </div>
      <Footer />
    </>
  );
}

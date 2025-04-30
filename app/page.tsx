import Navbar from "./components/Navbar";
import HeroImageContainer from "./components/HeroImage";
import EventDetails from "./components/EventDetails";

export default function Home() {
  return (
    <div className="bg-light-yellow">
      <Navbar />
      <HeroImageContainer />
      <EventDetails />
    </div>
  );
}

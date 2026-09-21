import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Wellness from "@/components/Wellness";
import Booking from "@/components/Booking";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Wellness />
        <Booking />
        <Location />
      </main>
      <Footer />
    </>
  );
}

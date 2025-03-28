import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicalAcademyTestimonials from "@/components/StudentReviewCards";
import Upcomingwebinars from "@/components/Upcomingwebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <MusicalAcademyTestimonials/>
    <Upcomingwebinars/>
    <Instructors/>
    <Footer/>
   </main>
  );
}

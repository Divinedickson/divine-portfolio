import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatButton from "@/components/assistant/ChatButton";
export default function Home() { return <><Navbar /><main><Hero /><FeaturedProjects /><Experience /><Research /><About /><Resume /><Contact /></main><Footer /><ChatButton /></>; }

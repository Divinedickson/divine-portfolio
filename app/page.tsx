import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AssistantWidget from "@/components/assistant/AssistantWidget";
import { AssistantProvider } from "@/components/assistant/AssistantContext";
export default function Home() { return <AssistantProvider><Navbar /><main><Hero /><FeaturedProjects /><Experience /><Research /><About /><Skills /><Resume /><Contact /></main><Footer /><AssistantWidget /></AssistantProvider>; }

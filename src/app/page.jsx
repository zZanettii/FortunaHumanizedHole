import Navbar from "@/components/Navbar";
import About from '@/app/about/page'
import LittleHoles from "./littleHoles/page";
import Contact from "./contact/page";
import Styles from '@/app/page.module.scss'

export default function Home() {
  return (
    <div className={Styles.maxContainer}>
      <Navbar/>
      <About/>
      <LittleHoles/>
      <Contact/>
    </div>
  );
}

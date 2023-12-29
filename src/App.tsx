 import Navbar from "@/scenes/navbar";
 import Home from "@/scenes/home";
import { useEffect, useState } from "preact/hooks";
 //should start from screen
import { SelectedPage} from "@/shared/types.js"
import Benefits from "@/scenes/benefits"
import OurClasses from "@/scenes/ourClasses"
import Footer from "@/scenes/footer"
import ContactUs from "@/scenes/contactUs"
 
 const App = () => {

  const [selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPageset]=useState<boolean>(false)
  
  useEffect(()=>{
    const HandleScroll=()=>{
      if (window.scrollY === 0) {
        setIsTopOfPageset(true)
        setSelectedPage(selectedPage.Home)
      }
      if (window.scrollY !== 0 ) setIsTopOfPageset(false)
    }
    window.addEventListener('scroll', HandleScroll)
    return ()=>window.removeEventListener('scroll', HandleScroll)
  },[])
   return (
     <div className="app bg-gray-20">
       <Navbar 
       isTopOfPage={isTopOfPage}
       selectedPage={selectedPage} 
       setSelectedPage={setSelectedPage}
       />
       <Home setSelectedPage={setSelectedPage} />
       <Benefits setSelectedPage={setSelectedPage} />
       <OurClasses setSelectedPage={setSelectedPage} />
       <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
     </div>
   )
 }
 
 export default App
 

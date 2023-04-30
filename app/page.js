import { Footer, Navbar } from '../components';
import { About, Contact, Explore, Feedback, GetStarted, Hero, Insights, Logos, Pricing, Stats, Testimonial, WhatsNew, World } from '../sections';
import { Teams} from '../sections/Teams';
import MainLayout from '../components/MainLayout';
import TechStack from '../sections/TechStack';

const Page = () => (
  <>
    <Navbar />
    <Hero/>
    <About/>
    <Stats/>
     <World/>
    
    <GetStarted/>
{/* <TechStack/> */}

<Explore/>
   
     
    <Feedback/>


      <WhatsNew />
    <Testimonial/>
    {/* <Pricing/> */}
     {/* <Insights/> */}
    <Logos/>
    <Teams/>
    <Contact/>
    <Footer />

  
 

  </>


);

export default Page;


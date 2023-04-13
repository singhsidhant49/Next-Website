import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <>
     <Navbar />
    <section className="bg-cover bg-center  " style={{ backgroundImage: "url('/backgroundimg.webp')", height:'auto'}}>

   
      <Hero />

    </section>

    <About />

    <Explore />

    <GetStarted />
    <WhatsNew />

    <World />

    <Insights />
    <Feedback />
    <Footer />

  </>


);

export default Page;


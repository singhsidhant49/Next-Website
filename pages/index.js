import { Footer, Navbar } from '../components';
import { About, Contact, Explore, Feedback, GetStarted, Hero, Logos, Stats, Testimonial, WhatsNew, World } from '../sections';
import { Teams } from '../sections/Teams';

const Page = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Stats />
    <World />
    <GetStarted />
    <Explore />
    <Feedback />
    <WhatsNew />
    <Testimonial />
    <Logos />
    <Teams />
    <Contact />
    <Footer />
  </>
);

export default Page;

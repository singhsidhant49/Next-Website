import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, Logos, Testimonial, WhatsNew, World } from '../sections';
import { Teams} from '../sections/Teams';

const Page = () => (
  <>
    <Navbar />
    <section className="bg-cover bg-center  " style={{ backgroundImage: "url('/backgroundimg.webp')", height: 'auto' }}>


      <Hero />

    </section>

    <About />

    <Explore />

    <GetStarted />
    <World />


    <Insights />
    <Feedback />
    <WhatsNew />
    <Testimonial/>
    <Logos/>
    <Teams/>
    <Footer />

  </>


);

export default Page;


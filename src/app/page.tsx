import Banner from './components/Banner/index';
import Companies from './components/Companies/Companies';
import Courses from './components/Courses/index';
import Mentor from './components/Mentor/index';
import Testimonials from './components/Testimonials/index';
import Newsletter from './components/Newsletter/Newsletter';


export default function Home() {
  return (
    <main>
      <div id="Banner">
      <Banner />
      </div>
      <div id="Companies">
      <Companies />
      </div >
      <div id="Courses">
      <Courses />
      </div>
      <div id="Mentor">
      <Mentor />
      </div >
      <div id="Testimonial">
      <Testimonials />
      </div>
      <div id="Newsletter">
      <Newsletter />
      </div>
    </main>
  )
}

import About from '../components/sections/about'
import Hero from '../components/sections/hero'
import Layout from '../components/layout'
import Projects from '../components/sections/projects'
import Testimonials from '../components/sections/testimonials'

const Home = () => {
  return (
    <Layout>
      <div className='grid gap-52 lg:gap-64'>
        <Hero />
        <Projects/>
        <About />
        <Testimonials/>
      </div>
    </Layout>
  )
}

export default Home

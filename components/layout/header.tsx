import Navbar from '../sections/navbar'
import Sidebar from '../sections/sidebar'

const Header = () => {
  return (
    <section>
      <div className="lg:hidden">
        <Sidebar/>
      </div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
    </section>
  )
}

export default Header

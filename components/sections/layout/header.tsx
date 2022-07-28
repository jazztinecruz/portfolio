import Navbar from '../navbar'
import Sidebar from '../sidebar'

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

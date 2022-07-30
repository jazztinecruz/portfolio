import Navbar from '../sections/navbar'
import Sidebar from '../sections/sidebar'

const Header = () => {
  return (
    <div>
      {/* mobile */}
      <div className="lg:hidden">
        <Sidebar/>
      </div>
      {/* laptop */}
      <div className="hidden lg:block">
        <Navbar />
      </div>
    </div>
  )
}

export default Header

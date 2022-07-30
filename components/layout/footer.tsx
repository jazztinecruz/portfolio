import Link from 'next/link'
import FooterLinks from '../elements/footer-links'
import SocialLinks from '../elements/social-links'
import Logo from '../elements/logo'

const Footer = () => {
  return (
    <div
      id="contacts"
      className="mt-40 grid grid-rows-[auto,1fr] gap-10 py-4 lg:py-8"
    >
      {/* logo and back to top */}
      <div className="grid lg:grid-cols-[1fr,auto] lg:items-center">
        <div className="hidden lg:block">
          <Logo />
        </div>
        <div className='mx-auto lg:ml-auto'>
          <Link href="#hero">
            <button className="bg-transparent text-sm lg:text-lg font-semibold hover:-translate-y-1 transition-all duration-300">
              Back to Top
            </button>
          </Link>
        </div>
      </div>

      {/* footer links */}
      <div className="grid lg:grid-cols-[1fr,auto] items-center justify-center gap-10 lg:items-end">
        <FooterLinks />
        <SocialLinks />
      </div>
    </div>
  )
}

export default Footer

import NavLink from './nav-link'

interface Props {
  sidebar: boolean
}

const NavLinks = ({ sidebar }: Props) => {
  return (
    <ul className={`${sidebar ? "flex flex-col items-center gap-4" : "flex items-center gap-6"}`}>
      <NavLink sidebar={sidebar} title="Home"  link="#hero"/>
      <NavLink sidebar={sidebar} title="Projects" link="#projects"/>
      <NavLink sidebar={sidebar} title="About Me" link="#about"/>
      <NavLink sidebar={sidebar} title="Testimonials" link="#testimonials"/>
      <NavLink sidebar={sidebar} title="Contact Me" link="#contacts"/>
    </ul>
  )
}

export default NavLinks

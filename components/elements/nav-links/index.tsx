import NavLink from './nav-link'

interface Props {
  sidebar: boolean
}

const NavLinks = ({ sidebar }: Props) => {
  return (
    <ul className={`${sidebar ? "flex flex-col items-center gap-4" : "flex items-center gap-6"}`}>
      <NavLink sidebar={sidebar} title="Home" />
      <NavLink sidebar={sidebar} title="Projects" />
      <NavLink sidebar={sidebar} title="About Me" />
      <NavLink sidebar={sidebar} title="Testimonials" />
      <NavLink sidebar={sidebar} title="Contact Me" />
    </ul>
  )
}

export default NavLinks

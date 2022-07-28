interface Props {
  title: string
  sidebar: boolean
}

const NavLink = ({ title, sidebar }: Props) => {
  return (
    <li className={`${sidebar ? "text-secondary hover:bg-secondary hover:text-white w-full py-3 text-center rounded-md" : "opacity-60 hover:opacity-100"} transition-all duration-300 cursor-pointer`}>
      <a className="text-sm lg:text-md font-semibold tracking-wide ">
        {title}
      </a>
    </li>
  )
}

export default NavLink

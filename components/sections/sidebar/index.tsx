import Logo from '../../elements/logo'
import NavLinks from '../../elements/nav-links'
import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react'

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="grid grid-cols-[1fr,auto] items-center py-4">
      <Logo />

      <MenuAlt3Icon
        className="w-7 h-7 text-white cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      <div
        className={`${
          open ? 'block' : 'hidden'
        } absolute top-0 right-0 h-screen w-64 p-4 z-50 bg-white flex flex-col gap-10`}
      >
        <XIcon
          className="w-6 h-6 text-black ml-auto cursor-pointer hover:animate-spin"
          onClick={() => setOpen(!open)}
        />
        <NavLinks sidebar={true} />
      </div>
    </div>
  )
}

export default Sidebar

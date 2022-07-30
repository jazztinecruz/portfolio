import FooterLink from "./footer-link"

const FooterLinks = () => {
  return (
    <ul className="flex flex-col gap-3 items-center text-center lg:items-start lg:text-left">
      <FooterLink title="Email me: jzztn.crz@gmail.com" link="#"/>
      <FooterLink title="Facebook: Jazztine Cruz" link="https://www.facebook.com/jzztn.crz/"/>
      <FooterLink title="Instagram: Jzzzzztn" link="https://www.instagram.com/jazzzzztn/"/>
      <FooterLink title="Github: jzztn" link="https://github.com/jzztn"/>
      <FooterLink title="Call Me: 0906-402-2590" link="#"/>
    </ul>
  )
}

export default FooterLinks

import Link from "next/link"

interface Props {
  title: string
  link: string
}

const FooterLink = ({ title, link }: Props) => {
  return (
    <Link href={link}>
      <li>
        <a className="text-sm lg:text-md font-semibold tracking-wide">
          {title}
        </a>
      </li>
    </Link>
  )
}

export default FooterLink

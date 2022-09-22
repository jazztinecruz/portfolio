import Image from 'next/image'
import Link from 'next/link'

interface Props {
  image: string
  style: string
  url: string
}
const SocialLink = ({ image, style, url }: Props) => {
  return (
    <Link href={url}>
      <div className={`${style} relative cursor-pointer`}>
        <Image src={image} layout="fill" />
      </div>
    </Link>
  )
}

export default SocialLink

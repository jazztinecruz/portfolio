import Image from "next/image"

interface Props {
  image:string
  style: string
}
const SocialLink = ({image, style}:Props) => {
  return (
    <div className={`${style} relative cursor-pointer`}>
      <Image src={image} layout="fill"/>
    </div>
  )
}

export default SocialLink
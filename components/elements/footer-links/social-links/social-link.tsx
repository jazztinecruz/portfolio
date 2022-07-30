import Image from "next/image"

interface Props {
  image:string
}
const SocialLink = ({image}:Props) => {
  return (
    <div className='relative w-6 h-6 cursor-pointer'>
      <Image src={image} layout="fill"/>
    </div>
  )
}

export default SocialLink
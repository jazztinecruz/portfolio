import Image from "next/image"

interface Props {
  image: any
  title: string
  style: string
}

const Techonology = ({ image, title, style}: Props) => {
  return (
    <div className='flex flex-col gap-3 items-center'>
      <div className={`${style} relative`}>
        <Image src={image} layout="fill" />
      </div>

      <span className='text-sm lg:text-lg tracking-wide font-semibold'>{title}</span>
    </div>
  )
}

export default Techonology

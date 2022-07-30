import Image from "next/image"

interface Props {
  image: any
  title: string
}

const Techonology = ({ image, title}: Props) => {
  return (
    <div className='flex flex-col gap-3 items-center'>
      <div className="w-20 h-20 lg:w-[160px] lg:h-[160px] relative">
        <Image src={image} layout="fill" />
      </div>

      <span className='text-sm lg:text-lg tracking-wide font-semibold'>{title}</span>
    </div>
  )
}

export default Techonology

import Image from 'next/image'

interface Props {
  img: any
}
const Cover = ({ img }: Props) => {
  return (
    <div className="relative">
      {/* image */}
      <div className="w-[400px] lg:w-[500px] h-64 relative">
        <Image src={img} layout="fill" objectFit="contain" />
      </div>

      {/* left grid dot */}
      <div className="w-[100px] h-[100px] absolute -top-2 -left-2 lg:-top-2 lg:-left-12 -z-50">
        <Image src="/images/dot-grid.png" layout="fill" />
      </div>

      {/* right grid dot */}
      <div className="w-[100px] h-[100px] absolute -bottom-4 -right-4 lg:-bottom-12 lg:-right-6 -z-50">
        <Image src="/images/dot-grid.png" layout="fill" />
      </div>
    </div>
  )
}

export default Cover

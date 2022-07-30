import Image from "next/image"

const Cover = () => {
  return (
    <div className='border-4 relative w-full'>
      {/* image */}
      <div className='w-full lg:w-96 h-64 bg-gray-300'></div>

      {/* left grid dot */}
      <div className='w-[100px] h-[100px] absolute -top-8 -left-2 lg:-top-2 lg:-left-16 -z-50'>
        <Image src='/images/dot-grid.png' layout="fill"/>
      </div>

      {/* right grid dot */}
      <div className='w-[100px] h-[100px] absolute -bottom-12 -right-4 lg:-bottom-12 lg:-right-6 -z-50'>
        <Image src='/images/dot-grid.png' layout="fill"/>
      </div>
    </div>
  )
}

export default Cover
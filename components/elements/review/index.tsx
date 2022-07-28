import Image from 'next/image'
import Profile from './profile'
import Rate from './rate'

interface Props {
  name: string
  message: string
}
const Review = ({name, message}:Props) => {
  return (
    <div className="relative border-2 border-white p-6 flex flex-col gap-6 rounded-md">
      {/* author and rate */}
      <div className="flex items-center gap-6">
        <Profile initial={name[0]} />
        <div className="flex flex-col gap-1">
          <span className="font-semibold lg:text-lg tracking-wide">
            {name}
          </span>
          <Rate />
        </div>
      </div>

      {/* message */}
      <p className="leading-relaxed tracking-wide text-center">
        {message}
      </p>

      {/* clip */}
      <div className='absolute -top-10 -left-6'>
        <div className="relative w-[59px] h-[59px] lg:w-[69px] lg:h-[69px]">
          <Image src="/images/clip.png" layout="fill" />
        </div>
      </div>
    </div>
  )
}

export default Review

import Image from 'next/image'
import Link from 'next/link'
import Button from '../../elements/button'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-full grid lg:grid-flow-col gap-10 items-center mt-20"
    >
      {/* Text and buttons*/}
      <div className="flex flex-col gap-8 lg:gap-10">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-2xl lg:text-3xl tracking-wider text-white">
            Hi, I`m Jazztine Cruz
          </h3>
          <div className="w-full h-[100px] lg:w-[556px] lg:h-[120px] relative">
            <Image src="/images/occupation.png" layout="fill" />
          </div>
        </div>

        <div className="flex flex-row items-center gap-4">
          <Button name="GET TO KNOW ME" styled={true} link="#about" />
          <Button name="SEE MY PROJECTS" styled={false} link="#projects" />
        </div>
      </div>

      {/* Illustration */}
      <div className="w-full h-[400px] lg:w-[512px] lg:h-[533px] relative">
        <Image src="/images/illustration.png" layout="fill" />
      </div>
    </section>
  )
}

export default Hero

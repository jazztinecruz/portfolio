import Image from 'next/image'
import Title from '../../elements/section-title'

const About = () => {
  return (
    <section id="about" className="grid gap-24 lg:gap-28 items-center">
      <Title title="About Me" />

      <div className="lg:hidden">
        <div className="grid lg:grid-flow-col gap-20 items-center">
          {/* background */}
          <div>
            <p className="text-center leading-loose lg:text-lg tracking-wide">
              <strong>Welcome to my Portfolio!</strong> I am Jazztine Hernandez
              Cruz. I major in Computer Science with an honor of Deans Lister. I
              am Frontend Developer and a Website Designer. I specialized on
              making a well-made and user-friendly frontend websites and
              creating stunning website designs. I am a freelancer since 2021
              taking up all the projects from my clients from different school.
              I design and develop their website ideas or concept based on their
              preferences from scratch. <br></br> <br></br> For creating website
              designs, I used Figma eversince. Figma allows me to make all my
              designs without limitation and allows me to collaborate with other
              website designer. Styling my websites using CSS at first, and
              tried using SASS for better experience until I found out
              TailwindCss and now Im currently using it for much better
              experience and much more eaiser. And for developing user
              interface, I used react because it helps me to code
              without making separate JavaScript files. and I really found it
              interesting and easier.
              <br></br> <br></br>Since I was a child, I love making arts and
              designs. But not only I wanted to create, I love making my designs
              to exist and proudly flexing my talent to the world. And when I
              started to try coding it, I found it very interesting and I really
              loving it. Thats how I ended up becoming a Frontend Developer.
              <br></br> <br></br>As a Developer, I am a fast learner,
              trustworthy, hardworking and willing to learn as much as I can
              from my seniors. Giving out all my effort and the best as I can.
            </p>
          </div>

          {/* profile */}
          <div className="w-full h-[400px] lg:w-[580px] lg:h-[580px] relative">
            <Image src="/images/profile.png" layout="fill" />
          </div>
        </div>
      </div>

      {/* laptop */}
      <div className="hidden lg:block">
        <div className="grid grid-flow-col gap-20 items-center">
          {/* profile */}
          <div className="w-full h-[400px] lg:w-[580px] lg:h-[580px] relative">
            <Image src="/images/profile.png" layout="fill" />
          </div>

          {/* background */}
          <div>
            <p className="text-center leading-loose lg:text-lg tracking-wide">
              <strong>Welcome to my Portfolio!</strong> I am Jazztine Hernandez
              Cruz. I major in Computer Science with an honor of Deans Lister. I
              am Frontend Developer and a Website Designer. I specialized on
              making a well-made and user-friendly frontend websites and
              creating stunning website designs. I am a freelancer since 2021
              taking up all the projects from my clients from different school.
              I design and develop their website ideas or concept based on their
              preferences from scratch. <br></br> <br></br> For creating website
              designs, I used Figma eversince. Figma allows me to make all my
              designs without limitation and allows me to collaborate with other
              website designer. Styling my websites using CSS at first, and
              tried using SASS for better experience until I found out
              TailwindCss and now Im currently using it for much better
              experience and much more eaiser. And for developing user
              interface, I used reac because it helps me to code
              without making separate JavaScript files. and I really found it
              interesting and easier.
              <br></br> <br></br>Since I was a child, I love making arts and
              designs. But not only I wanted to create, I love making my designs
              to exist and proudly flexing my talent to the world. And when I
              started to try coding it, I found it very interesting and I really
              loving it. Thats how I ended up becoming a Frontend Developer.
              <br></br> <br></br>As a Developer, I am a fast learner,
              trustworthy, hardworking and willing to learn as much as I can
              from my seniors. Giving out all my effort and the best as I can.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

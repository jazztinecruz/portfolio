import Button from '../button'
import Cover from './cover'
import Techie from './techie'

interface Props {
  image: any
  name: string
  paragraph: string
  link: string
}
const Project = ({ image, name, paragraph, link }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:even:flex-row-reverse items-center lg:even:gap-40 gap-32 lg:gap-20">
      {/* carousel */}
      <Cover img={image} />

      {/* details */}
      <div className="flex flex-col gap-6">
        {/* title */}
        <h3 className="text-center lg:text-left font-semibold text-xl lg:text-2xl tracking-wide">
          {name}
        </h3>
        {/* summary */}
        <p className="text-center lg:text-left leading-loose tracking-wide">
          {paragraph}
        </p>

        {/* techies used */}
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <div className="flex gap-3 items-center">
            <Techie name="React" />
            <Techie name="Nextjs" />
            <Techie name="Typescript" />
          </div>

          <div className="lg:hidden">
            <div className="flex gap-3 items-center">
              <Techie name="TailwindCSS" />
              <Techie name="Figma" />
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex gap-3 items-center">
              <Techie name="TailwindCSS" />
              <Techie name="Figma" />
            </div>
          </div>
        </div>

        {/* visit site button */}
        <div className="mt-4 mx-auto lg:mx-0">
          <Button name="Visit Site" styled={true} link={link} />
        </div>
      </div>
    </div>
  )
}

export default Project

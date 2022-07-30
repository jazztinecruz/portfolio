import Button from '../button'
import Cover from './cover'
import Techie from './techie'

const Project = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:even:flex-row-reverse gap-32 lg:gap-20">
      {/* carousel */}
      <Cover />

      {/* details */}
      <div className="flex flex-col gap-6">
        {/* title */}
        <h3 className="text-center lg:text-left font-semibold text-xl lg:text-2xl tracking-wide">
          Project 001
        </h3>
        {/* summary */}
        <p className="text-center lg:text-left leading-loose tracking-wide">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, quam
          aperiam. Neque quae, temporibus numquam est ipsa eius rem illo non
          dolores obcaecati aspernatur quo delectus tenetur ad error ex alias?
          Enim reprehenderit dolore repellat, rem ratione similique maiores nam
          saepe nesciunt ut eligendi possimus vero modi excepturi placeat animi.
          Mollitia, ad sit vero voluptatibus, labore fugiat alias quibusdam,
          cumque in nam incidunt nulla neque minima? Tempore veniam
          necessitatibus eligendi!
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
        <div className='mt-4'>
          <Button name="Visit Site" styled={true} />
        </div>
      </div>
    </div>
  )
}

export default Project

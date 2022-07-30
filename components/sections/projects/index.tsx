import Project from "../../elements/project"
import Title from "../../elements/section-title"

const Projects = () => {
  return (
    <section id="projects" className="grid gap-32 lg:gap-40 items-center">
      <Title title="Projects Showcase" />

      <div className='flex flex-col gap-[200px] lg:gap-[300px]'>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
      </div>
    </section>
  )
}

export default Projects

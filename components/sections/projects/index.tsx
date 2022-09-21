import Project from '../../elements/project'
import Title from '../../elements/section-title'

const Projects = () => {
  return (
    <section id="projects" className="grid gap-32 lg:gap-40 items-center">
      <Title title="Projects Showcase" />

      <div className="flex flex-col gap-[200px] lg:gap-[300px]">
        <Project
          image="/images/art-gallery-img.png"
          name="Art Gallery Website"
          paragraph="This showcase the landing page of an Art Gallery Website. It was made by React, TailwindCss, TypeScript, Nextjs and Figma"
          link="https://art-gallery-landing-page-jzztn.vercel.app/"
        />
        <Project image="" name="Project 001" paragraph="lorem20" link=""/>
        <Project image="" name="Project 001" paragraph="lorem20" link=""/>
        <Project image="" name="Project 001" paragraph="lorem20" link=""/>
        <Project image="" name="Project 001" paragraph="lorem20" link=""/>
      </div>
    </section>
  )
}

export default Projects

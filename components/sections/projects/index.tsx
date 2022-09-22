import Project from '../../elements/project'
import Title from '../../elements/section-title'

const Projects = () => {
  return (
    <section id="projects" className="grid gap-32 lg:gap-40 items-center">
      <Title title="Projects Showcase" />

      <div className="flex flex-col gap-[200px] lg:gap-[300px]">
        <Project
          image="/images/dashboard.jpg"
          name="Project Manager System"
          paragraph="This showcase our very own Project Manager website wherein it allows the users to collab for a project, assigning project tasks for the members along with the deadline. It also allows the project members to chat and suggest their various ideas without using third party applications. It was developed by yours truly with a collaboration of one full stack developer colleague."
          link="#"
        />
        <Project
          image="/images/barangay-img.png"
          name="Barangay Victoria Reyes System"
          paragraph="This showcase the full website system of Barangay Victoria Reyes. It allows the user to request and inquire barangay documents online and effortless. Concepts of website was intended for the citizens of Barangay Victori Reyes. It was developed by yours truly with a collaboration of one full stack developer colleague."
          link="https://barangay-victoria-reyes.vercel.app/"
        />
        <Project
          image="/images/restaurant.png"
          name="Dine In Restaurant Website"
          paragraph="This showcase the landing page of Dine In Restaurant wherein you can see the best sellers of the restaurant."
          link="#"
        />
        <Project
          image="/images/art-gallery-img.png"
          name="Art Gallery Website"
          paragraph="This showcase the landing page of an Art Gallery Website wherein you can see some photos of the exhibiion."
          link="https://art-gallery-landing-page-jzztn.vercel.app/"
        />
        <Project image="" name="Project 001" paragraph="lorem20" link="" />
      </div>
    </section>
  )
}

export default Projects

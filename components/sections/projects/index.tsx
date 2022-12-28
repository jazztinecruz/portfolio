import Project from "../../elements/project";
import Title from "../../elements/section-title";

const Projects = () => {
  return (
    <section id="projects" className="grid gap-32 lg:gap-40 items-center">
      <Title title="Projects Showcase" />

      <div className="flex flex-col gap-[200px] lg:gap-[300px]">
        <Project
          image="/images/facebook-img.png"
          name="Facebook Homepage Clone"
          paragraph="This showcase the responsive homepage clone of one of the most popular social media, Facebook."
          link="https://facebook-clone-homepage-ctda-jzztn.vercel.app/"
        />
        <Project
          image="/images/instagram-clone.png"
          name="Instagram HomePage Clone"
          paragraph="This showcase the responsive homepage clone of one of the most popular social media, Instagram. This wade made in only one-hour. "
          link="https://play.tailwindcss.com/RAJjq3Trjw"
        />
        <Project
          image="/images/tiktok-clone.png"
          name="Tiktok HomePage Clone"
          paragraph="This showcase the responsive homepage clone of one of the most popular social media, Tiktok. This wade made in only one-hour."
          link="https://play.tailwindcss.com/K9m3bB0QmK"
        />
        <Project
          image="/images/barangay-img.png"
          name="Barangay Victoria Reyes System"
          paragraph="This showcase the full responsive website system of Barangay Victoria Reyes. It allows the user to request and inquire barangay documents online and effortless. Concepts of website was intended for the citizens of Barangay Victori Reyes. It was developed by yours truly with a collaboration of one full stack developer colleague. However, there will be some fixes to fix on the backend side."
          link="https://victoria-reyes-ashy.vercel.app/"
        />
        <Project
          image="/images/art-gallery-img.png"
          name="Art Gallery Website"
          paragraph="This showcase the responsive landing page of an Art Gallery Website wherein you can see some photos of the exhibiion."
          link="https://art-gallery-landing-page-jzztn.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;

import Image from "next/image";
import Title from "../../elements/section-title";

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
              Cruz. Bound to graduate in 2023 with a Bachelor’s Degree in
              Computer Science and has a consecutive Dean’s Lister and College
              Honors at Philippine Christian University, Philippines. I have 2+
              years experience in Frontend Web Development specialized in making
              responsive and user-friendly frontend websites using the famous
              and well-known technologies like ReactJs, NextJs, TypeScript and
              TailwindCSS, Git. And With 2+ years experience in creating and
              stunning website designs.<br></br> <br></br> I am a freelancer
              since 2021 taking some projects from different clients. I design
              and develop their website concepts based on their preferences from
              scratch.
              <br></br> <br></br>As a Developer, I am a fast learner,
              hardworking, intelligent, creative, trustworthy, and always
              willing to learn as much as I can from my seniors. Giving out all
              my effort and I want to leverage my skills to your company and
              will make sure to contribute as many as I can to your company
              project.
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
              Cruz. Bound to graduate in 2023 with a Bachelor’s Degree in
              Computer Science and has a consecutive Dean’s Lister and College
              Honors at Philippine Christian University, Philippines. I have 2+
              years experience in Frontend Web Development specialized in making
              responsive and user-friendly frontend websites using the famous
              and well-known technologies like ReactJs, NextJs, TypeScript and
              TailwindCSS, Git. And With 2+ years experience in creating and
              stunning website designs.<br></br> <br></br> I am a freelancer
              since 2021 taking some projects from different clients. I design
              and develop their website concepts based on their preferences from
              scratch.
              <br></br> <br></br>As a Developer, I am a fast learner,
              hardworking, intelligent, creative, trustworthy, and always
              willing to learn as much as I can from my seniors. Giving out all
              my effort and I want to leverage my skills to your company and
              will make sure to contribute as many as I can to your company
              project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

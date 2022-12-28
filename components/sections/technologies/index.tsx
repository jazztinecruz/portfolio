import Title from "../../elements/section-title";
import Techonology from "../../elements/technology";

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="relative grid gap-32 lg:gap-40 items-center">
      <Title title="Techonologies" />

      <div className="grid gap-12 lg:gap-20">
        {/* html, css, ts, js */}
        <div className="grid grid-flow-col lg:justify-center lg:gap-24 items-center">
          <Techonology
            image="/images/html.png"
            title="HTML"
            style="w-20 h-20 lg:w-[160px] lg:h-[160px]"
          />
          <Techonology
            image="/images/css.svg.png"
            title="CSS"
            style="w-20 h-20 lg:w-[160px] lg:h-[160px]"
          />
          <Techonology
            image="/images/js.png"
            title="JavaScript"
            style="w-20 h-20 lg:w-[160px] lg:h-[160px]"
          />
          <Techonology
            image="/images/ts.svg.png"
            title="TypeScript"
            style="w-20 h-20 lg:w-[160px] lg:h-[160px]"
          />
        </div>

        {/* react, nextjs, tailwind */}
        <div className="grid grid-flow-col lg:justify-center lg:gap-24 items-center">
          <Techonology
            image="/images/react.svg.png"
            title="React"
            style="w-24 h-20 lg:w-[180px] lg:h-[160px]"
          />
          <Techonology
            image="/images/nextjs.png"
            title="NextJs"
            style="w-48 h-24 lg:w-[500px] lg:h-[280px]"
          />
          <Techonology
            image="/images/tailwind.svg.png"
            title="TailwindCSS"
            style="w-20 h-20 lg:w-[160px] lg:h-[160px]"
          />
        </div>

        {/* sass, figma, */}
        <div className="grid grid-flow-col lg:justify-center lg:gap-48 items-center">
          <Techonology
            image="/images/sass.svg.png"
            title="Sass"
            style="w-20 h-20 lg:w-[180px] lg:h-[160px]"
          />
          <Techonology
            image="/images/material-ui-logo.png"
            title="Material-ui"
            style="w-28 h-28 lg:w-[150px] lg:h-[180px]"
          />
          <Techonology
            image="/images/figma.png"
            title="Figma"
            style="w-20 h-28 lg:w-[130px] lg:h-[180px]"
          />
          <Techonology
            image="/images/git-logo.png"
            title="Git"
            style="w-20 h-28 lg:w-[200px] lg:h-[200px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;

import Title from '../../elements/section-title'
import Techonology from '../../elements/technology'

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="relative grid gap-32 lg:gap-40 items-center"
    >
      <Title title="Techonologies" />

      <div className="grid gap-12 lg:gap-20">
        {/* html, css, ts, js */}
        <div className="grid grid-flow-col lg:justify-center lg:gap-24 items-center">
          <Techonology image="/images/html.png" title="HTML" />
          <Techonology image="/images/css.svg.png" title="CSS" />
          <Techonology image="/images/js.png" title="JavaScript" />
          <Techonology image="/images/ts.svg.png" title="TypeScript" />
        </div>

        {/* react, nextjs, tailwind */}
        <div className="grid grid-flow-col lg:justify-center lg:gap-24 items-center">
          <Techonology image="/images/react.svg.png" title="React" />
          <Techonology image="/images/nextjs.png" title="NextJs" />
          <Techonology image="/images/tailwind.svg.png" title="TailwindCSS" />
        </div>

        {/* sass, figma, */}
        <div className="grid grid-flow-col lg:justify-center lg:gap-24 items-center">
          <Techonology image="/images/sass.svg.png" title="Sass" />
          <Techonology image="/images/figma.png" title="Figma" />
        </div>
      </div>
    </section>
  )
}

export default Technologies

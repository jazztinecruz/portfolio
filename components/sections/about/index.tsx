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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              officiis nostrum soluta sunt repellendus est, corporis dicta,
              beatae nihil numquam molestiae fugit? Quo laboriosam, molestias
              voluptatum eveniet fuga iusto aperiam voluptas dolore iste
              temporibus, aspernatur omnis ab rerum ut soluta maiores. Odio
              consequatur repellendus ex alias architecto ducimus recusandae
              odit. <br></br> <br></br>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              est distinctio animi ut quas praesentium magnam eaque dolorem at
              eveniet, maiores, sint vitae. Consequatur facilis adipisci,
              suscipit, aut quasi beatae laudantium earum eos animi voluptate
              porro! Voluptates, eaque. Neque, est aliquid dignissimos maxime
              possimus sed quaerat temporibus. Quibusdam, temporibus sequi.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              officiis nostrum soluta sunt repellendus est, corporis dicta,
              beatae nihil numquam molestiae fugit? Quo laboriosam, molestias
              voluptatum eveniet fuga iusto aperiam voluptas dolore iste
              temporibus, aspernatur omnis ab rerum ut soluta maiores. Odio
              consequatur repellendus ex alias architecto ducimus recusandae
              odit. <br></br> <br></br>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              est distinctio animi ut quas praesentium magnam eaque dolorem at
              eveniet, maiores, sint vitae. Consequatur facilis adipisci,
              suscipit, aut quasi beatae laudantium earum eos animi voluptate
              porro! Voluptates, eaque. Neque, est aliquid dignissimos maxime
              possimus sed quaerat temporibus. Quibusdam, temporibus sequi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

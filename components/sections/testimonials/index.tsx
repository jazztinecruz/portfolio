import Review from '../../elements/review'
import Title from '../../elements/section-title'

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="grid gap-24 lg:gap-40"
    >
      <Title title="Testimonials" />

      <div className="grid lg:grid-flow-col items-center gap-20 lg:gap-20">
        <Review
          name="Claire Sanchez"
          message="I highly recommend her to someone who's looking for a website developer.
        She is very responsive. She's giving out her ideas to make the system
        looks more stunning. She exceed our expectations regarding on developing
        our system. She also finished the website on time."
        />
        <Review
          name="Nabi Hermosa"
          message="I really love and appreciate her service. She's giving out ideas of what is better. She's also fast and approachable. Super worth it!"
        />
      </div>
    </section>
  )
}

export default Testimonials

import Review from '../../elements/review'
import Title from '../../elements/section-title'

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="grid justify-center items-center gap-24 lg:gap-40"
    >
      <Title title="Testimonials" />

      <div className="flex flex-col lg:flex-row gap-20 lg:gap-10 items-center">
        <Review
          name="Claire De Leon"
          message="I highly recommend her to someone who's looking for a website developer.
        She is very responsive. She's giving out her ideas to make the system
        looks more stunning. She exceed our expectations regarding on developing
        our system. She also finished the website on time."
        />
        <Review
          name="Nabi Hermosa"
          message="I highly recommend her to someone who's looking for a website developer.
        She is very responsive. She's giving out her ideas to make the system
        looks more stunning. She exceed our expectations regarding on developing
        our system. She also finished the website on time."
        />
      </div>
    </section>
  )
}

export default Testimonials

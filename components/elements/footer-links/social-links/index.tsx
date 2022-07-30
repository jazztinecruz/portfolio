import SocialLink from "./social-link"

const SocialLinks = () => {
  return (
    <div className='flex items-center gap-6'>
      <SocialLink image="/images/facebook.png"/>
      <SocialLink image="/images/instagram.png"/>
      <SocialLink image="/images/github.png"/>
      <SocialLink image="/images/gmail.png"/>
      <SocialLink image="/images/phone.png"/>
    </div>
  )
}

export default SocialLinks
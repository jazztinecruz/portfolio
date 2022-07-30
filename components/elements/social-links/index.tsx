import SocialLink from "./social-link"

const SocialLinks = () => {
  return (
    <div className='flex items-center gap-6'>
      <SocialLink image="/images/facebook.png" style="w-6 h-8"/>
      <SocialLink image="/images/instagram.png" style="w-6 h-6"/>
      <SocialLink image="/images/github.png" style="w-6 h-6"/>
      <SocialLink image="/images/gmail.png" style="w-8 h-6"/>
      <SocialLink image="/images/phone.png" style="w-6 h-6"/>
    </div>
  )
}

export default SocialLinks
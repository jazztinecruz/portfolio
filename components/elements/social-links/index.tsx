import SocialLink from "./social-link"

const SocialLinks = () => {
  return (
    <div className='flex items-center gap-4'>
      <SocialLink image="/images/facebook.png" style="w-3 h-5"/>
      <SocialLink image="/images/instagram.png" style="w-4 h-4"/>
      <SocialLink image="/images/github.png" style="w-4 h-4"/>
      <SocialLink image="/images/gmail.png" style="w-6 h-4"/>
      <SocialLink image="/images/phone.png" style="w-4 h-4"/>
    </div>
  )
}

export default SocialLinks
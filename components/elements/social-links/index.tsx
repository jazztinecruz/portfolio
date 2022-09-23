import SocialLink from "./social-link"

const SocialLinks = () => {
  return (
    <div className='flex items-center justify-center gap-4'>
      <SocialLink image="/images/facebook.png" style="w-3 h-5" url="https://www.facebook.com/jzztn.crz/"/>
      <SocialLink image="/images/instagram.png" style="w-4 h-4" url="https://www.instagram.com/jazzzzztn/"/>
      <SocialLink image="/images/gmail.png" style="w-6 h-4" url="#"/>
      <SocialLink image="/images/phone.png" style="w-4 h-4" url="#"/>
    </div>
  )
}

export default SocialLinks
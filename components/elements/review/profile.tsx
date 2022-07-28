interface Props {
  initial: string
}
const Profile = ({ initial }: Props) => {
  return (
    <div className="border-[1px] border-white rouned-full w-12 h-12 rounded-full grid justify-center items-center">
      <div className="rounded-full w-10 h-10 bg-gradient-to-r from-darkViolet via-pitch to-lightViolet grid justify-center items-center text-lg font-bold">
        {initial}
      </div>
    </div>
  )
}

export default Profile

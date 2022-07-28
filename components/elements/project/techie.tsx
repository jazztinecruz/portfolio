interface Props {
  name: string
}

const Techie = ({ name }: Props) => {
  return (
    <div className="border-2 border-white rounded-full px-4 py-2 hover:bg-gradient-to-r from-darkViolet to-lightViolet via-pitch  cursor-pointer whitespace-nowrap text-sm bg-transparent text-white tracking-wide transition-all duration-300">
      {name}
    </div>
  )
}

export default Techie

interface Props {
  styled: boolean
  name: string
}

const Button = ({ styled, name }: Props) => {
  return (
    <button
      className={`${
        styled
          ? 'bg-gradient-to-r from-darkViolet via-pitch to-lightViolet'
          : 'border-2 border-white'
      } rounded-md py-3 px-8 text-white tracing-wider font-semibold text-sm cursor-pointer hover:-translate-y-1 transition-all duration-300`}
    >
      {name}
    </button>
  )
}

export default Button

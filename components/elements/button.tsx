import Link from "next/link"

interface Props {
  styled: boolean
  name: string
  link ? :string
}

const Button = ({ styled, name , link}: Props) => {
  return (
    <Link href={`${link === "" ? "" : link}`}>
      <button
        className={`${
          styled
            ? 'bg-gradient-to-r from-darkViolet via-pitch to-lightViolet'
            : 'border-2 border-white'
        } rounded-md py-3 px-8 text-white tracing-wider whitespace-wrap font-semibold text-sm cursor-pointer hover:-translate-y-1 transition-all duration-300`}
      >
        {name}
      </button>
    </Link>
  )
}

export default Button

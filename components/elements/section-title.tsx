interface Props {
  title: string
}
const Title = ({ title }: Props) => {
  return <h1 className='text-white text-xl lg:text-3xl  font-semibold tracking-wide text-center'>{title}</h1>
}

export default Title

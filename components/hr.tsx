interface Props {
  width: string
}
const Hr = ({ width }: Props) => {
  return <div className={`   ${width} m-2 h-hr bg-blue-300`}></div>
}

export default Hr

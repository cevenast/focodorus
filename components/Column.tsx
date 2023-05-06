export interface Props {
  children?: React.ReactNode
  size:string
  className:string
}

const Column = (props:Props) => {
  return(
    <section className={`${props.size} ${props.className} `}>
      {props.children}
    </section>
  )
}

export default Column
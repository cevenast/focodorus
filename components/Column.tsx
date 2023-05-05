export interface Props {
  children?: React.ReactNode;
}

const Column = (props:Props) => {
  return(
    <section className="w-full">
      {props.children}
    </section>
  )
}

export default Column
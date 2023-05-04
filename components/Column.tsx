export interface Props {
  children?: React.ReactNode;
}

const Column = (props:Props) => {
  return(
    <section className="border-2 border-indigo-200 w-full">
      {props.children}
    </section>
  )
}

export default Column
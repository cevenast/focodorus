const CompletedPoms = ({ completedPoms }:{completedPoms:boolean[]}) => {
  return(
    <div className="text-center">
      {completedPoms.map((pom, i) => <span key={i} className={`${pom ? 'bg-green-800' : 'bg-neutral-800'} inline-block h-3 w-3 rounded-full mx-1`}></span>)}
    </div>
  )
}

export default CompletedPoms
import { SingleButtonInterface } from "@/types/pomodoroTypes"

const SingleButton = ({ children, onClick }:SingleButtonInterface) => {
  return ( 
    <button className="text-neutral-900 hover:text-neutral-700" onClick={onClick}>
      {children}
    </button>
  )
}

export default SingleButton
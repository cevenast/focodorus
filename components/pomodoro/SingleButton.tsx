import { MouseEventHandler, ReactNode } from "react"

interface SingleButtonInterface { 
  children: ReactNode
  onClick?: MouseEventHandler
}

const SingleButton = ({ children, onClick }:SingleButtonInterface) => {
  return ( 
    <button className="text-neutral-900 hover:text-neutral-700" onClick={onClick}>
      {children}
    </button>
  )
}

export default SingleButton
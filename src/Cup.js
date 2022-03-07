import React from 'react'

export default function Cup(props) {
  let className = props.position === 7 || props.position === 0 ? 
  props.position === 7 ? 
  "basket right" : "basket left" : "cup"

  const beads = []
  for(let i = 0; i < props.howManyBeads; i++){
    beads.push(<div className="bead">.</div>)
  }

  return (
    <div 
    className={className} 
    onClick={() => !className.includes("basket") && props.handleTurnStart(props.position, props.howManyBeads)}
    >
        {beads}
       
    </div>
  )
}

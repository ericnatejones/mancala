import React, {useState} from 'react'
import Cup from './Cup';




export default function Board() {
    const [cups, setCups ] = useState([0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4])   
    
    const handleTurnStart = (start, howMany) => {
        setCups(prevCups => {
            const cupsCopy = [...prevCups]
            cupsCopy[start] = 0
            for(let i = 1; i <= howMany; i++){
                const position = (i + start) % 14
                cupsCopy[position]++
            }
            return cupsCopy
        })
    }
    
    return (
        <>
        <div className="board top">
        
            {cups.slice(0, Math.floor(cups.length / 2)).map((cup, i) => {
                return <Cup
                key={i} 
                position={i}
                howManyBeads={cup}
                handleTurnStart={handleTurnStart}/>
            })}
        </div>
        <div className="board bottom">
        
            {cups.slice(Math.floor(cups.length / 2)).map((cup, i) => {
                return <Cup
                key={i} 
                position={i + 7}
                howManyBeads={cup}
                handleTurnStart={handleTurnStart}/>
            })}
        </div>
        </>
    )
}

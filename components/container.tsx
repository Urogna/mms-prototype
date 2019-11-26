import React, {useState} from 'react'
import produce from 'immer'
import '../public/static/output.css';

const Container = ({mod, css}) => {
    let tags = []
    const [index, setIndex] = useState(0)
    mod.forEach((f, i) => {
        tags.push(<Tag name={f.name} index={i} set={setIndex} current={index} color={f.color}/>)
    })
    
    return (
        <div className={css}>
            {tags}
            <div className={`w-auto overflow-hidden bg-${mod[index].color}-400 border-2 border-${mod[index].color}-800 w-64 rounded rounded-t-none`}>
                {mod[index].jsx}
            </div>
        </div>
    )
}

const Tag = ({name, index, set, current, color}) => {
    const selectedClass = `p-1 w-1/2 text-2xl pb-2 -mb-2 border-2 border-b-0 border-${color}-800 bg-${color}-400 hover:cursor-default rounded rounded-b-none focus:outline-none`
    const unselectedClass = `p-1 w-1/2 text-2xl border-2 border-${color}-800 bg-${color}-200 hover:bg-${color}-700 hover:text-white rounded active:outline-none active:bg-${color}-900`
    
    return (
        <button className={index === current? selectedClass : unselectedClass}
                onClick={() => {set(index)}}>
            {name}
        </button>
    )
}

export default Container
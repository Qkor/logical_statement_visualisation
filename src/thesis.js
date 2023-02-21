import { useContext } from 'react'
import { formulaContext } from './App'
import Modify from './modify'
import './thesis.css'

const Thesis = ({id})=>{
    const {formula,setFormula} = useContext(formulaContext)
    return(
        <div className="thesisBox">
            <Modify index={id}/>
            <textarea value={formula[id].text} onChange={(e)=>{
                let newFormula = formula.slice()
                newFormula[id].text = e.target.value
                setFormula(newFormula)
            }}/>
        </div>
    )
}

export default Thesis
import Thesis from "./thesis"
import Operator from "./operator"
import Modify from "./modify"
import './argumentation.css'
import { useContext } from "react"
import { formulaContext } from "./App"


const Argumentation = ({id}) =>{

    const {formula} = useContext(formulaContext)

    const thisIndex = formula.findIndex(i => i.id === id) 
    const thisFormula = formula[thisIndex]

    if(thisFormula.type === 'thesis')
        return <Thesis id={thisIndex}/>

    if(thisFormula.type === 'NOT')
        return(
            <div className='NOT'>
                <Modify index={thisIndex}/>
                <Operator type='NOT'/>
            {thisFormula.children.map(child => 
                <Argumentation id={child}/>)}        
            </div>
        )

    return(
        <div className={thisFormula.type}>
            <Modify index={thisIndex}/>
            {thisFormula.children.slice(0,thisFormula.children.length-1).map(child => <>
                <Argumentation id={child}/>
                <Operator type={thisFormula.type}/>
            </>)}  
            <Argumentation id={thisFormula.children[thisFormula.children.length-1]}/>      
        </div>
    )

}

export default Argumentation
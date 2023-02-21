import { useContext } from 'react'
import { formulaContext } from './App'
import './modify.css'
const Modify = ({index}) => {
  
  const {formula, setFormula} = useContext(formulaContext)

  if(formula[index].id === 0)
    return <></>

  const rmvFormula = ()=>{}
  const notFormula = ()=>{}

  const addFormula = (type)=>{
    const newFormula = formula.slice()
    const parentIndex = newFormula.findIndex(i => i.id === newFormula[index].parent)

    const newId = (new Date()).getTime()
    let newThesis ={
      id: newId,
      type: "thesis",
      parent: 0,
      children:[]
    }

    if(newFormula[parentIndex].type == type){
      newFormula[parentIndex].children.unshift(newId)
      newThesis.parent = newFormula[parentIndex].id
      newFormula.unshift(newThesis)
      setFormula(newFormula)
    }
    else{
      let cp = {...newFormula[index]}
      cp.parent = newFormula[index].id
      cp.id = (new Date()).getTime()+1
      newFormula[index].type = type
      newFormula.push(cp)
      newThesis.parent = newFormula[index].id
      newFormula.push(newThesis)
      newFormula[index].children = [newId, cp.id]
      setFormula(newFormula)
    }
  }



  return (
    <div className='btns'>
        <button className="rmvBtn" onClick={rmvFormula}>x</button>
        <button className="notBtn" onClick={notFormula}>~</button>
        <button className="impBtn" onClick={()=>addFormula('IMP')}>{'>'}</button>
        <button className="orBtn"  onClick={()=>addFormula('OR')}>v</button>
        <button className="andBtn" onClick={()=>addFormula('AND')}>&</button>
    </div>
  )
}

export default Modify
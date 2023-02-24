import { useContext } from 'react'
import { formulaContext } from './App'
import './modify.css'
const Modify = ({index}) => {
  
  const {formula, setFormula} = useContext(formulaContext)
  const parentIndex = formula.findIndex(i => i.id === formula[index].parent)

  if(formula[index].id === 0)
    return <></>

  const rmvFormula = ()=>{} //to be implemented
  const notFormula = ()=>{
    let newFormula = formula.slice()
    if(newFormula[index].type === 'NOT'){
      let childIndex = newFormula.findIndex(i => i.id === newFormula[index].children[0])
      const thisId = newFormula[index].id
      newFormula[index] = {...newFormula[childIndex]}
      newFormula[index].id = thisId
      newFormula[childIndex].id = -1
      newFormula = newFormula.filter(i=>i.id!==-1)
    }
    else if(newFormula[parentIndex].type === 'NOT'){
      newFormula[index].parent = newFormula[parentIndex].parent
      newFormula[index].id = newFormula[parentIndex].id
      newFormula[parentIndex].id = -1
      newFormula = newFormula.filter(i=>i.id!==-1)
    }
    else{
      let cp = {...newFormula[index]}
      cp.parent = newFormula[index].id
      const newId = (new Date()).getTime()
      cp.id = newId
      newFormula[index].type = 'NOT'
      newFormula[index].children = [newId]
      newFormula.push(cp) 
    }
    setFormula(newFormula)
  } 

  const addFormula = (type)=>{
    const newFormula = formula.slice()

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
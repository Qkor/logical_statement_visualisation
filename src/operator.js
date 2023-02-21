
const operator = ({type}) => {
    switch(type){
        case 'IMP':
            type = "=>"
            break
        case 'NOT':
            type = "~"
            break
        case 'AND':
            type = "&"
            break
        case 'OR':
            type = "v"
            break
        default:
            type = String(type)
            break
    }
    return (
    <div className="operator">
        {type}
    </div>
  )
}

export default operator
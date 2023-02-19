import Thesis from "./thesis"
import './argumentation.css'

//e.g. const args = ["IMP",["AND", "a",["OR","b",["NOT","c"]]],"d"]


const Argumentation = ({args}) => {
    
    if(typeof(args)!=='object')
        return <Thesis arg={args}/>

    switch(args[0]){
        case 'IMP':
            if(args.length<3)
                throw new Error("incorect formula")
            return(
                <div className="impBox">
                    {args.slice(1,args.length-1).map(arg=>
                        <>
                            <Argumentation args={arg}/>
                            <div>{"=>"}</div>
                        </>
                    )}
                    <Argumentation args={args[args.length-1]}/>
                </div>
            )
        case 'AND':
            if(args.length===1)
                throw new Error("incorect formula")
            return(
                <div className="andBox">
                    {args.slice(1,args.length-1).map(arg=>
                        <>
                            <Argumentation args={arg}/>
                            <div>and</div>
                        </>
                    )}
                    <Argumentation args={args[args.length-1]}/>
                </div>
            )
        case 'OR':
            if(args.length===1)
                throw new Error("incorect formula")
            return(
                <div className="orBox">
                    {args.slice(1,args.length-1).map(arg=>
                        <>
                            <Argumentation args={arg}/>
                            <div>or</div>
                        </>
                    )}
                    <Argumentation args={args[args.length-1]}/>
                </div>
            )
        case 'NOT':
            if(args.length!==2)
                throw new Error("incorect formula")
            return(
                <div className="negationBox">
                    <div>{"~"}</div>
                    <Argumentation args={args[1]}/>
                </div>
            )
        default:
            throw new Error("incorect formula")
    }


}

export default Argumentation
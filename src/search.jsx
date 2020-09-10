import React, {useState} from "react";
export default function Search(props){
    const [id,setId]=useState({
        name:""
    });
    function handleChange(event){ 
        const {name,value}= event.target;
        setId(preVal=>{
            return{
                ...preVal,
                [name]:value
            };
        });
    }
    function add(event){
        props.onAdd(id);

    }
    return(
        <div>
            <div className="search">
            <input className="sBar" onChange={handleChange} name="name" value={id.name} type="text" placeholder="Enter GitHub user name"/>
            </div>
            <div className="search">
            <button onClick={add} className="btn">Submit</button>
            </div >
        </div>
    )
}
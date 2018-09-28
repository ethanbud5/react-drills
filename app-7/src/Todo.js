import React,{Component} from "react";
import List from "./List"
import NewTask from "./NewTask"

function Todo(props){
    return(
        <div>
            <NewTask addHandler={props.addHandler}/>
            <List array={props.array}/>
        </div>
    )
}
export default Todo
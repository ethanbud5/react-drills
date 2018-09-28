import React from "react";

function List(props){
    let displayList = props.array.map((item,i)=>(
        <h2 key={i}>
            {item}
        </h2>
    ))
    return(
        <div>
            {displayList}
        </div>
    )

}

export default List
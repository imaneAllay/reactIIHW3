import React from "react";
import './List.scss'


export const List=({data})=>{
    return(
        <div className="array">
         {
            data.map((e,i)=>{
                return <div  className="list" key={i}>
                    <span className="my-icon"></span>{e}</div>
            })
         }
        </div>
    )
}
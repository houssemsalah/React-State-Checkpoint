import React from 'react'
import PropTypes from 'prop-types'

function Person({img="img here" , name="Name Here",age="Age Here",pro="Profession Here"}) {
    const styleObject = {textAlign:"center",fontSize: "30px", background:"red", color:"black",marginRight : "300px" ,marginLeft:"300px",marginTop:"100px" ,padding:"70px"}
    return (
        <div style = {styleObject}>
             <img className="pic" src={img} thumbnail style={{ width:"20%",height:"20%"}} />
            <p>
                Heey ! My Name is {name} a {age} years old, and i'm a {pro} 
                
            </p>
           
            <div>
           
            </div>
        </div>
    )
}
Person.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    pro:PropTypes.string
}
export default Person;
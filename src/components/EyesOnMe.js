import React from "react";


function EyesOnMe() {
  return (
    <div>
        <button onFocus={event =>(console.log('Good!'))} 
        onBlur={event =>(console.log('Hey! Eyes on me!'))}>EyesOnMe</button> 
    </div>
  )
}

export default EyesOnMe


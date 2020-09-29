import React from "react"

function FormComponent(props) {
    return (
        <main>
         <h2>Enter information:</h2>
            <form onSubmit={props.handleSubmit}>
                    <input 
                        name="name" 
                        value={props.data.name} 
                        onChange={props.handleChange} 
                        placeholder="Name" 
                    /> 
                    <br />  <br />
                    <input 
                        name="email" 
                        value={props.data.email}
                        onChange={props.handleChange} 
                        placeholder="Email-Id" 
                    />
                    
                    <br />  <br />
                    
                    <input 
                        name="phone" 
                        value={props.data.phone}
                        onChange={props.handleChange} 
                        placeholder="Phone Number" 
                    />
                    <br />
                    <br/>
                
             <button >Submit</button>
            </form>
            <hr />
                <h2>Entered information:</h2>
                <p>Your Name: {props.data.name} </p>
                <p>Your Email: {props.data.email}</p>
                <p>Your Phone: {props.data.phone}</p>
               
                
            </main>
            
            
      
    )
}

export default FormComponent
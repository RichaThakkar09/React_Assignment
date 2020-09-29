import React from "react"

function Profile(props) {
    return (
        <div>
            <h2>Name:{props.profile.name}</h2>
            <h2> Email:{props.profile.email}</h2>
            <h2> Contact:{props.profile.phone}</h2>
           
           <hr/>
           <hr/>
            
            
           
        </div>
    )
}

export default Profile
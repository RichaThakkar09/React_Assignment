import React from "react"
import Profile from "./Profile"
import profileData from "./profileData"

function App() {
    const profileDatanew = profileData.map(item => <Profile key={item.id} profile={item}/>)
    
    return (
        <div>
            {profileDatanew}
        </div>
    )
}

export default App
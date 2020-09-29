import React, {Component} from "react"
import FormComponent from "./FormComponent"
import profileData from "./profileData"

class Form extends Component {
     constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            phone: "",
            profileData:profileData,
            
          
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
        handleChange(event) {
        const {name, value} = event.target
       
        this.setState({
            [name]: value
        }) 
    }
     handleSubmit(event){
        const mydata={ 
            name: this.state.name,
            email:this.state.email , 
            phone: this.state.phone
        
            
        }
        console.log(mydata)
         var instance=this.state.profileData
         console.log(instance)
         const x= profileData.length
         
         instance[x]=mydata
         this.setState({profileData:profileData})
           
         //  this.setState({
          // profileData: [ ...this.state.profileData],mydata
//});
   console.log(profileData[x])  }
    
        
   
    render() {
        return(
            <FormComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                data={this.state}
            />
        )
    }
}

export default Form



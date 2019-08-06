import React, { Component } from 'react'


class Updateclient extends Component{
    constructor(props){
        super(props)
        this.state={
           owner:this.props.client.owner ,
           emailtype:this.props.client.emailType ,
           sold:this.props.client.sold
        }
       
    }
    search=(event)=>{
        const target=event.target
        const name=target.name
        const value =  target.value
        this.setState({
            [name]:value
            
        })
    }
    transfer=()=>{
       let user= this.props.data.find(c=>c.name===this.props.client)
       user.owner=this.state.owner
       
        this.props.Update(user)
    }
    email=()=>{
        let user= this.props.data.find(c=>c.name===this.props.client)
        user.emailType=this.state.emailtype
        
         this.props.Update(user)
     }
     sold=()=>{
        let user= this.props.data.find(c=>c.name===this.props.client)
        user.sold=true
        
         this.props.Update(user)
     }
    render(){
        console.log(this.state)
        return(
           <div>
               <div>
               <input name='owner' type='text' list='owners' onChange={this.search} value={this.state.owner} ></input>
               <datalist id="owners">
                {this.props.data.map(c=><option value={c.owner}></option>)}
                </datalist>
                <button onClick={this.transfer}>transfer</button>
                </div>
                <div>
                <input name='emailtype' type='text' list='emailtypes' onChange={this.search} value={this.state.emailtype} ></input>
               <datalist id="emailtypes">
                <option value='A'>A</option>
                <option value='B'>B</option>
                <option value='C'>C</option>
                <option value='D'>D</option>
                </datalist>
                <button onClick={this.email}>send</button>
                </div>
                <div>declare sale <button onClick={this.sold}>sold</button></div>
           </div>
        )
    }
}

export default Updateclient
import React, { Component } from 'react'


class Updateclient extends Component{
    constructor(){
        super()
        this.state={
            client:'',
           owner:'' ,
           emailtype:'' ,
           sold:''
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
       let user= this.props.data.find(c=>c.name===this.state.client)
       user.owner=this.state.owner
       
        this.props.Update(user,user.name)
    }
    email=()=>{
        let user= this.props.data.find(c=>c.name===this.state.client)
        user.emailType=this.state.emailtype
        
         this.props.Update(user,user.name)
     }
     sold=()=>{
        let user= this.props.data.find(c=>c.name===this.state.client)
        user.sold=true
        
         this.props.Update(user,user.name)
     }
    render(){
        
        return(
           <div>
               <div>
               <h2>update</h2>
               <input name='client' type='text' list='clients' onChange={this.search} value={this.state.client} ></input>
               <datalist id="clients">
                {this.props.data.map(c=><option key={c._id} value={c.name}></option>)}
                </datalist>
               </div>
               <div>
               <input name='owner' type='text' list='owners' onChange={this.search} value={this.state.owner} ></input>
               <datalist id="owners">
                {this.props.data.map(c=><option key={c._id} value={c.owner}></option>)}
                </datalist>
                <button onClick={this.transfer}>transfer</button>
                </div>
                <div>
                <input name='emailtype' type='text' list='emailtypes' onChange={this.search} value={this.state.emailtype} ></input>
               <datalist id="emailtypes">
                <option key='A' value='A'>A</option>
                <option key='B' value='B'>B</option>
                <option key='C' value='C'>C</option>
                <option key='D' value='D'>D</option>
                </datalist>
                <button onClick={this.email}>send</button>
                </div>
                <div>declare sale <button onClick={this.sold}>sold</button></div>
           </div>
        )
    }
}

export default Updateclient
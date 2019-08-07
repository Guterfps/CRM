import React, { Component } from 'react'

class Createclient extends Component{
   constructor(){
       super()
       this.state={
        client:'',
        owner:'',
        country:''
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
newclient=()=>{
    this.props.newclient({
        name:this.state.client,
        country:this.state.country,
        owner:this.state.owner,
        firstContact:new Date()
    })
}
    render(){
        
        return(
           <div>
              <h2>add client</h2>
            <div>
            full name : <input name='client' type='text'  onChange={this.search} value={this.state.client} ></input>
            </div>
            <div>
           owner : <input name='owner' type='text' list='owners' onChange={this.search} value={this.state.owner} ></input>
               <datalist id="owners">
                {this.props.data.map(c=><option key={c._id} value={c.owner}></option>)}
                </datalist>
            </div>
            <div>
            country :<input name='country' type='text' list='countrys' onChange={this.search} value={this.state.country} ></input>
               <datalist id="countrys">
                {this.props.data.map(c=><option key={c._id} value={c.country}></option>)}
                </datalist>
            </div>
            <button onClick={this.newclient}>add new client</button>
           </div>
        )
    }
}

export default Createclient
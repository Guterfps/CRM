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
            <div  className='input'>
            full name : <input placeholder='name' name='client' type='text'  onChange={this.search} value={this.state.client} ></input>
            </div>
            <div  className='input'>
           owner : <input placeholder='owner' name='owner' type='text' list='owners' onChange={this.search} value={this.state.owner} ></input>
               <datalist id="owners">
                {this.props.data.map(c=><option key={c._id} value={c.owner}></option>)}
                </datalist>
            </div>
            <div  className='input'>
            country :<input placeholder='country' name='country' type='text' list='countrys' onChange={this.search} value={this.state.country} ></input>
               <datalist id="countrys">
                {this.props.data.map(c=><option key={c._id} value={c.country}></option>)}
                </datalist>
            </div>
            <button className='btn waves-effect waves-light blue' type="submit" name="action" onClick={this.newclient}>add new client</button>
           </div>
        )
    }
}

export default Createclient
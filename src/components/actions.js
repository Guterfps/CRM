import React, { Component } from 'react'
import Updateclient from './Updateclient'

class Actions extends Component{
    constructor(){
        super()
        this.state={
            client:'',
            search:'name',
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
    render(){
        
        return(
           <div>
               <h2>update</h2>
               <input name='client' type='text' list='clients' onChange={this.search} value={this.state.client} ></input>
               <datalist id="clients">
                {this.props.data.map(c=><option value={c[this.state.search]}></option>)}
                </datalist>
               { this.props.data.find(c=>c.name===this.state.client)!==undefined ?  <Updateclient Update={this.props.Update} client={this.props.data.find(c=>c.name===this.state.client)} data={this.props.data} /> : null}
           </div>
        )
    }
}

export default Actions
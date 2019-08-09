import React, { Component } from 'react'
import User from './User'
import Userupdate from './userupdate'

class Clients extends Component{
    constructor(){
        super()
        this.state={
            client:'',
            search:'name',
            counter:0,
            update:{show:false,user:{}}
        }
       
    }
    search=(event)=>{
        const target=event.target
        const name=target.name
        const value =  target.value
        this.setState({
            [name]:value,
            counter:0
        })
    }
    next=()=>{
        let counter=this.state.counter
      counter+=10
      this.setState({
          counter:counter
      })
    }
    back=()=>{
        let counter=this.state.counter
        counter-=10
        this.setState({
            counter:counter
        }) 
    }
    updateuser=(user)=>{
        let update={...this.state.update}
        update.show=true
        update.user=user
        this.setState({
            update:update
        })
    }
    cancel=()=>{
        let update={...this.state.update}
        update.show=false
        this.setState({
            update:update
        })
    }
    render(){
      
        return(
           <div >
               <div className='input'>
               <input placeholder='search'  name='client' type='text' list='clients' onChange={this.search} value={this.state.client} ></input>
               <datalist id="clients">
                {this.props.data.map(c=><option key={c._id} value={c[this.state.search]}></option>)}
                </datalist>
                <select className="browser-default col s2" name='search' type='select-one' onChange={this.search} value={this.state.search}>
                <option value='name'>name</option>
                <option value='country'>country</option>
                {/* <option value='emailType'>emailType</option> */}
                <option value='owner'>owner</option>
                </select>
                </div>
                <div >
               <div className="row blue titles" >
                   <div className="col s2 flow-text"> name </div>
                   <div className="col s2 flow-text"> surname </div>
                   <div className="col s2 flow-text"> country </div>
                   <div className="col s2 flow-text"> firstContact </div>
                   <div className="col s2 flow-text "> emailType </div>
                   <div className="col s1 flow-text"> sold </div>
                   <div className="col s1 flow-text"> owner </div>
                   </div>
               {this.props.data.filter(s=> s[this.state.search].indexOf(this.state.client)!==-1).splice(this.state.counter,10).map(n=><User updateuser={this.updateuser} user={n} />)}
               </div>
               <button onClick={this.back}>back</button>
               <button onClick={this.next}>next</button>
               {this.state.update.show ? <Userupdate Update={this.props.Update} cancel={this.cancel} user={this.state.update.user} />:null}
               
           </div>
        )
    }
}

export default Clients
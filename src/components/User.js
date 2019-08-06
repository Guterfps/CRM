import React, { Component } from 'react'


class User extends Component{
    updateuser=()=>{
        this.props.updateuser(this.props.user)
    }
    render(){
        const user=this.props.user
        return(
           <div key={user.id} onClick={this.updateuser}>
               <span> {user.name.split(' ',2)[0]} </span>
               <span> {user.name.split(' ',2)[1]} </span>
               <span> {user.country} </span>
               <span> {user.firstContact} </span>
               <span> {user.emailType===null ? '-': user.emailType} </span>
               <span> {user.sold ? 'V': '-'} </span>
               <span> {user.owner} </span>
           </div>
        )
    }
}

export default User
import React, { Component } from 'react'


class User extends Component{
    updateuser=()=>{
        this.props.updateuser(this.props.user)
    }
    render(){
        const user=this.props.user
        return(
           <div className="row" key={user._id} onClick={this.updateuser}>
               <span className='col s2'> {user.name.split(' ',2)[0]} </span>
               <span className='col s2'> {user.name.split(' ',2)[1]} </span>
               <span className='col s2'> {user.country} </span>
               <span className='col s2'> {user.firstContact} </span>
               <span className='col s1'> {user.emailType===null ? '-': user.emailType} </span>
               <span className='col s1'> {user.sold ? 'V': '-'} </span>
               <span className='col s2'> {user.owner} </span>
           </div>
        )
    }
}

export default User
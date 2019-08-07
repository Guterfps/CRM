import React, { Component } from 'react'
import Updateclient from './Updateclient'
import Createclient from './Createclient'
class Actions extends Component{
   
  
    render(){
        
        return(
           <div>
               <Updateclient Update={this.props.Update}  data={this.props.data} /> 
               <Createclient newclient={this.props.newclient} data={this.props.data} />
           </div>
        )
    }
}

export default Actions
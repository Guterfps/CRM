import React, { Component } from 'react'


class Badges extends Component{
 newclients(){
        let date= new Date()
       let num= this.props.data.filter(d=>parseInt(d.firstContact.split('-',3)[0],10)===date.getFullYear() && parseInt(d.firstContact.split('-',3)[1],10)===date.getMonth()+1)
       const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        
        return [num.length,months[date.getMonth()]]
    }
    emailsent(){
        let num=this.props.data.filter(e=>e.emailType!==null)
        return num.length
    }
    notsold(){
        let num=this.props.data.filter(s=>s.sold===false)
        return num.length
    }
    hotcountry(){
        let hotest={name:'',num:0}
        let countrys=this.props.data.map(c=>c.country)
        for(let  c of countrys){
        let num=this.props.data.filter(d=>d.country===c && d.sold===true)
        if(num.length>hotest.num){
            hotest.name=c
            hotest.num=num.length
        }
        }
        return hotest
    }
    render(){
        return(
           <div>
           <span>
               <div className='bage purple'><i class="large material-icons">trending_up</i></div>
               <div  className='num'>  
               <div className='num'> <h2>{this.newclients()[0]} </h2></div> 
               <div>new clients in {this.newclients()[1]} </div></div>
           </span>
           <span>
               <div className='bage yellow'><i class="large material-icons">email</i></div>
               <div  className='num'>
               <div className='num'> <h2>{this.emailsent()} </h2></div>
               <div> Emails Sent</div> 
               </div>
               </span>
           <span>
           <div className='bage blue'><i class="large material-icons">person</i></div>
           <div  className='num'>
              <div className='num'><h2>{this.notsold()}</h2> </div>
              <div> Outstanding Clients</div>
              </div>
               </span>
           <span>
           <div className='bage red'><i class="large material-icons">whatshot</i></div>
           <div  className='num'>
           <div className='num'><h2>{this.hotcountry().name}</h2> </div>
            <div> Hottest Country sales,{this.hotcountry().num} </div> 
               </div>
                </span>
           </div>
        )
    }
}

export default Badges
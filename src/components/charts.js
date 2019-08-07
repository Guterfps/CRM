import React, { Component } from 'react'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
  import {
    LineChart, Line
  } from 'recharts';

class Charts extends Component{
    topemployees(){
        let arr=[]
        let hotest={}
        let owners=this.props.data.map(c=>c.owner)
        for(let  o of owners){
        let num=this.props.data.filter(d=>d.owner===o && d.sold===true)
        
            hotest[o]={name:o,sold:num.length}
            
        }
        
        for (let i in hotest){
            arr.push(hotest[i])
        }
        arr.sort(function(a, b){return b.sold - a.sold})
        
        return arr.splice(0,3)
       
    }
    salespercountry(){
        let arr=[]
        let hotest={}
        let countrys=this.props.data.map(c=>c.country)
        for(let  c of countrys){
        let num=this.props.data.filter(d=>d.country===c && d.sold===true)
        
            hotest[c]={name:c,sold:num.length}
            
        }
        
        for (let i in hotest){
            arr.push(hotest[i])
        }
        return arr
    }
    saleslast30days(){
        let date= new Date()
        let priorDate = new Date();
        priorDate.setDate(priorDate.getDate() - 30)
        
        let num= this.props.data.filter(d=> d.firstContact.split('T',2)[0]<=date.toISOString().split('T')[0] && d.firstContact.split('T',2)[0]>priorDate.toISOString().split('T')[0] && d.sold===true)
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        console.log(num)
        return [num,num.length,months[priorDate.getMonth()]]
    }
    render(){
        return(
           <div>
             <h3> Top Employees </h3> 
             <BarChart
        width={500}
        height={300}
        data={this.topemployees()}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sold" fill="#82ca9d" />
      </BarChart>
      <h3>Sales By Country</h3>
      <BarChart
        width={800}
        height={300}
        data={this.salespercountry()}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sold" fill="red" />
      </BarChart>
      <h3>sales since {this.saleslast30days()[2]}</h3>
      <LineChart
        width={500}
        height={300}
        data={this.saleslast30days()[0]}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="firstContact" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={this.saleslast30days()[1]} stroke="#8884d8" activeDot={{ r: 8 }} />
        
      </LineChart>
           </div>
        )
    }
}

export default Charts
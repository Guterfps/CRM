import React ,{Component} from 'react'
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Data from './data.json'
import Clients from './components/clients'
import Actions from './components/actions'
import Analytics from './components/analytics'

class App extends Component {
  constructor(){
    super()
    this.state={
      data:[]
    }
  }
  async componentDidMount(){
    const res= await axios.get('http://localhost:8000/clients')
    
    this.setState({data: res.data})
  }
  Update=async(user,olduser)=>{
    let data=[...this.state.data]
   let client= data.find(u=>u.name===olduser)
  //  client.name=user.name
  //  client.country=user.country
   await axios.put(`http://localhost:8000/client/${client.name}`,{
     name:user.name,
     country:user.country,
     owner:user.owner,
     sold:user.sold,
     emailType:user.emailType
    })
    this.componentDidMount()
  }
  newclient=async(user)=>{
    await axios.post('http://localhost:8000/client',user)
    this.componentDidMount()
  }
render(){
  return(
    <Router>
    <div>
    <nav>
    <div class="nav-wrapper green">
    <ul id="nav-mobile" class="left hide-on-med-and-down ">
     <li> <Link to='/clients'> clients </Link></li>
     <li> <Link to='/actions'> actions </Link></li>
     <li> <Link to='/analytics'> analytics </Link></li>
      </ul>
      </div>
    </nav>
    <Route path='/clients' render={()=><Clients Update={this.Update} data={this.state.data}/>} />
    <Route path='/actions' render={()=><Actions newclient={this.newclient} Update={this.Update} data={this.state.data}/>} />
    <Route path='/analytics' render={()=><Analytics data={this.state.data}  update={this.componentDidMount}/>} />
    </div>
    </Router>
  )
}
}

export default App;

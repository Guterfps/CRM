import React ,{Component} from 'react'
import Axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Data from './data.json'
import Clients from './components/clients'
import Actions from './components/actions'
import Analytics from './components/analytics'

class App extends Component {
  constructor(){
    super()
    this.state={
      data:Data
    }
  }
  Update=(user,olduser)=>{
    let data=[...this.state.data]
    console.log(olduser)
   let client= data.find(u=>u.name===olduser)
   
   client.name=user.name
   client.country=user.country
   this.setState({
     data: data
   })
  }
render(){
  return(
    <Router>
    <div>
    <nav>
      <Link to='/clients'> clients </Link>
      <Link to='/actions'> actions </Link>
      <Link to='/analytics'> analytics </Link>
    </nav>
    <Route path='/clients' render={()=><Clients Update={this.Update} data={this.state.data}/>} />
    <Route path='/actions' render={()=><Actions />} />
    <Route path='/analytics' render={()=><Analytics />} />
    </div>
    </Router>
  )
}
}

export default App;

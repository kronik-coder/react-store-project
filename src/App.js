import React, { Component } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import Cart from './views/Cart'
import Login from './views/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import axios from 'axios';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      items: [],
      token: '',
      myItems: []
    }
  }

  addToCart = (myItem)=>{
    let myItems = this.state.myItems
    myItems.push(myItem)
    this.setState(myItems)
    console.log(myItems)
  }


  render() {
    axios.get('https://fakestoreapi.com/products?limit=15').then(({data})=>{
      this.setState({items: data})
    })
    return (
      <div>
        <NavBar items={this.state.items} token={this.state.token}/>
        <Routes>
          <Route path='/' element={<Home items={this.state.items} addToCart={this.addToCart}/>} />
          <Route path='/cart' element={<Cart myItems={this.state.myItems}/>} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    )
  }
}


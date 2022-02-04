import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component{
    state = {
      items:[
        {id: 1, text:'Accueil', path:'/'},
        {id: 2, text:'Notes', path:'/dashboard'},
        {id: 3, text:'Paramètres', path:'/params'}
      ]
    }

  render(){
    return <div className="menu">
      {this.state.items.map(item => <Link to={item.path} key={item.id}>{item.text}</Link>)}
    </div>
  }
}
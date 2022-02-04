import React from "react";

export default class Params extends React.Component{

  resetStorage = () => {
    localStorage.clear();
  }
  render(){
    return(
      <div className="container">
        <div className="content">
          <h1>Paramètres</h1>
          <button onClick={() => this.resetStorage}>Reset localstorage</button>
        </div>
      </div>
    )
  }
}
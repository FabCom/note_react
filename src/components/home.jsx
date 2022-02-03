import React from "react";

export default class Home extends React.Component{

  render(){
    return(
      <div className="container">
        <div className="alert">
          <h1>Bienvenue</h1>
          <p>Vous êtes sur une petite application de prise de notes réalisée en ReactJS.</p>
          <p>Les notes que vous renseignez sont stockez en local sur votre ordinateur.</p>
        </div>
      </div>
    )
  }
}
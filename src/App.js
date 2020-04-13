import React from 'react';
import './App.css';

/* function Helloworld(props) { 
return(
<div id="hola">
<h3>{props.subtitle}</h3>
{props.mytext}
</div>
) 
 } */
class Helloworld extends React.Component{

state = {
  show: false
}

  render(){
    if (this.state.show){
      return(
        <div id="hola">
        <h3>{this.props.subtitle}</h3>
        {this.props.mytext}
        </div>
      )
    }else{
      return <h1>There are not elements</h1>
    }
    
  }
}

function App() {
  return (
    <div>
      This is may component:
      <Helloworld mytext="Hello Fazt" subtitle="loremp ispum"/>
       <Helloworld mytext="Hola mundo" subtitle="asadsad"/>
        <Helloworld mytext="Hello!" subtitle="component three"/>
        </div>
  );
}


export default App;

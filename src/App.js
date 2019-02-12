import React, { Component } from 'react';

import './App.css';
import './bootstrap.min.css'
import Background from './ApiCalls'



function Head() {
  return(

<nav className="navbar navbar-default navbar-fixed-top ">
    <div className="container flex space-between ">
      
      <div className="flex align-center brand">
      <a href="/">
      
      <img  className="DeathStar" alt="ble" src={window.location.origin + '/Pics/14-Death-Star.jpg' }/>
        </a>
     </div>
     </div>
</nav>     

)
}
function LeftPanel() {
return (<div className="col-sm-2 well side-menu side-menu-left order-left">
<row>
<col-sm>
<nav id="sidebar">
    <div className="col-sm-2 well side-menu side-menu-left order-left">
        <h3>Destroy planet?</h3>
    </div>

    <ul className="list-unstyled components">
        <p>Click one to commence bombardment</p>
        <li className="active">
          
        </li>
        <ul>
        <Background/>      
        </ul>      
      
    </ul>
</nav>
</col-sm>
</row>

</div>)

}
function MidArea() {
return(
  <div className="container-fluid">
<div className="jumbotron jumbotron-sm midarea">
  blood
</div>
</div>

)

}


class Main  extends Component {
  render() {
    return (
      <div className="row">
      <div className="container-fluid">
      <Head/>   
      </div>
     
      <LeftPanel/>

      <MidArea/>
      
      </div>


    
    
   
       
     
    );
  }




}


export default Main;

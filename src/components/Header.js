import React from 'react';
import goodwinImage from './../img/goodwin-logo.jpg';

function Header (){
  return (
    <React.Fragment>
    <h1>Goodwin's Truck and Equipment</h1>
    <img src = {goodwinImage} alt='logo' />
    </React.Fragment>
  );
}

export default Header;
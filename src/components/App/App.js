import React from 'react';
import './App.css';
import LoopController from '../Loops/LoopController';
import appBackground from '../../logos/cover.jpeg'


class App extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <div className="app-root" style = {{backgroundImage:`url(${appBackground})`,backgroundSize:'100% 100%'
    }} >
        <h1>Nir Chacham's Loop Machine</h1>
        <LoopController />
      </div>
    );
  }
}

export default App;

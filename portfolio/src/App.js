import { React, Component } from 'react';
import Countdown from './Countdown';
import './App.css'

class App extends Component {

  render() {
    return (
      <div className='center'>
        <Countdown />
      </div>
    );
  }

}

export default App;
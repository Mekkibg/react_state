import React from 'react';
import Person from './Person';
import './App.css'
import { Button } from 'react-bootstrap';

class App extends React.Component {
  // class constructor
  constructor(){
    super();
    this.state = {
      show : true,
      count:0,

    };
  }
  componentDidMount(){
    setInterval(() => this.setState({count: this.state.count+1}),1000);
  }

  render() {
    return (
      <div className='App'>
        {!this.state.show && <Person />}
        <h2> {this.state.count}</h2>
        <Button className='button-53'
              onClick={() => this.setState({show: !this.state.show})}
              >
          show profil
        </Button>
      </div>
    )
  }
}

export default App;
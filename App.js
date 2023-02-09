import React, { Component } from 'react';
import Dialog from './components/Dialog';

class App extends Component {
  state = {
    isOpen: false
  }
  render() {
    return (
      <div className="App">
        <button onClick={(e) => this.setState({ isOpen: true })}>Click me</button>

        <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
          Thank you for your interest in the role. Please answer the question below.
          
           Kindly provide 3 or more sentences. Thank you

        </Dialog>
      </div>
     
    );
  }
}

export default App;

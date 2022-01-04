import React, { useState, useEffect } from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log("Constructor")
  }
  static getDerivedStateFromProps(props,state){
    console.log("B getDerivedstatefromprops")
    return null
}
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
    console.log("componentDidMount")
  }
  
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
    console.log("componentDidUpdate")
  }
  componentWillUnmount() {
    document.title = `You clicked ${this.state.count} times`;
    console.log("componentWillUnmount")
  }
  
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}



export default App;


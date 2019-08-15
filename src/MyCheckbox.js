import React from 'react';
import './App.css';
import MyNavbar from './MyNavbar'


// bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';


class MyCheckbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { on: true }
  }
  
  // when checkbox value changes
  changeOn = () => {

    // update state
    this.setState( (state) => ({
      on: !state.on

    // notify parent
    }), ()=> this.props.callParent({
      name: this.props.name,
      val: this.state.on
    }) ); 
  }
  render() {
    return (
      <Form.Check
        type="checkbox"
        label={this.props.name}
        checked={this.state.on}
        onChange={this.changeOn}
      />
    );
  }
}

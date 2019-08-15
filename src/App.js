import React from 'react';
import './App.css';
import MyNavbar from './MyNavbar'


// bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';


class MyRadioButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { userType: 2 }
  }
  
  // when checkbox value changes
  changeOn = (event) => {

    const index = parseInt( event.target.dataset.index);

    // update state
    this.setState( (state) => ({
      userType: index

    // notify parent
    }), ()=> this.props.callParent({

      name: "userType",
      val: this.state.userType
    }) ); 
  }
  render() {

    return ['Active', 'Inactive', 'Both'].map( (name, i) => 
      <Form.Check
        type="radio"
        label={name}
        name={name}
        key={i}
        onChange={this.changeOn}
        data-index={i}
        checked={ this.state.userType === i }
      />
    );

  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      userType: 2,
    };
  }

  buildUrl() {
      const protocol = "http";
      const server=   "localhost";
      const port=     "3002";
      const userType= this.state.userType;
      
      return `${protocol}://${server}:${port}/?userType=${userType}`;
  }



  componentDidMount() {

    const url = this.buildUrl();
    console.log(url);

    fetch(url)
      .then( response => response.json() )
      .then(data => {
        this.setState({ data: data.d });
      });
  }


  componentChanged = (arg) => {

    this.setState({ 
      [arg.name]: arg.val

    }, ()=>{
    
    const url = this.buildUrl();

    fetch(url)
        .then( response => response.json() )
        .then(data => {
          this.setState({ data: data.d });
        });
    
    });
  }

  render() {

    return (
      <React.Fragment>
        <MyNavbar />
        <Container>
          <Row>
            <h1>CSC List</h1>
          </Row>
          <Row>
            <MyRadioButton
              callParent={this.componentChanged}/>
          
          </Row>
          <Row>
            <Table striped hover bordered variant="dark">
              <thead>
                <tr>
                  <th>Active</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>ACD_Login_Name</th>
                  <th>Login ID</th>
                  <th>Department</th>
                  <th>Emp_Status</th>
                  <th>Start_Date</th>
                  <th>End_Date</th>
                </tr>
              </thead>
              <tbody>
              { 
                this.state.data.map( (item, index)  => {
                  const stDate = new Date(item.Start_Date);
                  const stDateF = stDate.toLocaleDateString("en-US");

                  const enDate = new Date(item.End_Date);
                  const enDateF = item.End_Date == null ? "" : 
                    enDate.toLocaleDateString("en-US");

                  const active = item.End_Date == null ?
                    "Yes" : "No";

                  return (
                    <React.Fragment key={index}>
                      <tr>
                        <td>{active}</td>
                        <td>{item.First} {item.Last}</td>
                        <td>{item.Email}</td>
                        <td>{item.ACD_Login_Name}</td>
                        <td>{item.ACD_Login_ID}</td>
                        <td>{item.Department}</td>
                        <td>{item.Emp_Status}</td>
                        <td>{stDateF}</td>
                        <td>{enDateF}</td>
                      </tr>
                    </React.Fragment>
                  )
                })
              }
              </tbody>
            </Table>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;

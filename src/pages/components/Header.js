import React, {Component} from 'react'
import {Row, Col, Navbar, NavItem} from 'react-materialize'

class Header extends Component{
  render(){
    return(
      <section>
        <Row>
          <Col s={12} m={4}>LOGO</Col>
          <Col s={12} m={8}>NOMBRE</Col>
        </Row>
        <Navbar brand='logo' right>
          <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>
      </section>
    )
  }
}

export default Header
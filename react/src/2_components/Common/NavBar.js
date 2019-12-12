import React from 'react'
import { Row, Col } from 'reactstrap'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAddressCard, faAt } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => (
  <Row className="navBar navBar-desktop">
    <Col sm={12} md={1}>
      <div className="logo">
        <a href="/"><img src="https://yjalifebook.files.wordpress.com/2019/12/cropped-e5ae87e888aae59198-2.jpeg" alt="logo"/></a>
      </div>
    </Col>
    <Col sm={12} md={7}>
      <Row className="navs">
        <Col sm={6} md={3}><a href="/">home</a></Col>
        <Col sm={6} md={3}><a href="/reduxApp">ReduxApp</a></Col>
        <Col sm={6} md={3}><a href="/Dashboard">Dashboard</a></Col>
        <Col sm={6} md={3}><a href="/heroes">Heroes</a></Col>
      </Row>
    </Col>
    <Col sm={12} md={4}>
      <Row className="navBar-right">
        <Col><FontAwesomeIcon icon={faAddressCard} color="green" /></Col>
        <Col><FontAwesomeIcon icon={faCoffee} color="green" /></Col>
        <Col><FontAwesomeIcon icon={faAt} color="green" /></Col>
      </Row>
    </Col>
  </Row>
)

export default NavBar
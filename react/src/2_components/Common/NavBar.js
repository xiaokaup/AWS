import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAddressCard, faAt } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => (
  <div className="navBar">
    <Container className="navBar-desktop">
      <Row>
        <Col sm={1}>
          <div className="logo">
            <a href="/"><img src="https://yjalifebook.files.wordpress.com/2019/12/cropped-e5ae87e888aae59198-2.jpeg" alt="logo"/></a>
          </div>
        </Col>
        <Col sm={7}>
          <Row className="navs">
            <Col><a href="/">home</a></Col>
            <Col><a href="/reduxApp">ReduxApp</a></Col>
            <Col><a href="/Dashboard">Dashboard</a></Col>
            <Col><a href="/heroes">Heroes</a></Col>
          </Row>
        </Col>
        <Col sm={4}>
          <Row className="navBar-right">
            <Col><FontAwesomeIcon icon={faAddressCard} color="green" /></Col>
            <Col><FontAwesomeIcon icon={faCoffee} color="green" /></Col>
            <Col><FontAwesomeIcon icon={faAt} color="green" /></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
)

export default NavBar
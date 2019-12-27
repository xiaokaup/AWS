import React, { useState } from 'react'
import { Row, Col, Collapse, Tooltip, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAddressCard, faAt } from '@fortawesome/free-solid-svg-icons'



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle_tooltip = () => setTooltipOpen(!tooltipOpen);

  return (
    <Row className="navBar navBar-desktop">
      <Col sm={12} md={1}>
        <div className="logo">
          <a href="/"><img src="https://yjalifebook.files.wordpress.com/2019/12/cropped-e5ae87e888aae59198-2.jpeg" alt="logo"/></a>
        </div>
        <div id="block_mobile_menu">
          <span className="menu-icon" onClick={() => setIsOpen(!isOpen)}></span>
        </div>
      </Col>
      <Col sm={12} md={7}>
        <Collapse isOpen={isOpen}>
          <Row className="navs">
            <Col sm={6} md={3}><a href="/">home</a></Col>
            <Col sm={6} md={3}><a href="/reduxApp">ReduxApp</a></Col>
            <Col sm={6} md={3}><a href="/Dashboard">Dashboard</a></Col>
            <Col sm={6} md={3}><a href="/heroes">Heroes</a></Col>
          </Row>
        </Collapse>
        
      </Col>
      <Col sm={12} md={4}>
        <Row className="navBar-right">
          <Col id="block_faAddressCard">
            <FontAwesomeIcon icon={faAddressCard} color="green" />
            <div id="popup_faAddressCard">
              <div>
                <p>Name: <span>Jiean Yang</span></p>
                <p>Nationality: <span>chinese</span></p>
                <p>School: <span>ESIGELEC</span></p>
                <p>Diploma: <span>Finance and IT engineer</span></p>
                <p>Job: <span>Full stack developer</span></p>
                <p>Address: <span>17 rue Antoine Courbarien</span></p>
              </div>
            </div>
          </Col>
          <Col>
            <span id="PopoverLegacy" style={{cursor: 'pointer'}}>
              <FontAwesomeIcon icon={faCoffee} color="green" />
            </span>
            <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
              <PopoverHeader>Coffe</PopoverHeader>
                <PopoverBody>Coffee is life!<br/>Give energy to tired people.</PopoverBody>
            </UncontrolledPopover>
          </Col>
          <Col>
            <span href="#" id="DisabledAutoHideExample"><FontAwesomeIcon icon={faAt} color="green" /></span>
            <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={toggle_tooltip}>
              jiean.yang8534@gmail.com
            </Tooltip>
        </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default NavBar
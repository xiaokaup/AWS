import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { Row, Col } from 'reactstrap'
import './Header.css'

const Header = () => (
	<Row>
		<Jumbotron className="header">
	    <h1 className="display-3">Hello, world!</h1>
	    <p className="lead">The Big Bang</p>
	    {/*<hr className="my-2" />*/}
	    {/*<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>*/}
	  {/*  <p className="lead">
	      <Button color="primary">Learn More</Button>
	    </p>*/}
	  </Jumbotron>
	</Row>
)

export default Header
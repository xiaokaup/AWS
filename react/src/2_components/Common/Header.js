import React, { Fragment } from 'react'
import { Jumbotron, /*Button*/ } from 'reactstrap';
import { Row } from 'reactstrap'
import './Header.css'

const Header = () => (
	<Fragment>
		<Row>
			<Jumbotron className="header">
		    <h1 className="display-3 typing">Hello, world!</h1>
		    <div>
		    	<p className="lead">The Big Bang</p>
		    </div>
		    {/*<hr className="my-2" />*/}
		    {/*<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>*/}
		  {/*  <p className="lead">
		      <Button color="primary">Learn More</Button>
		    </p>*/}
		  </Jumbotron>
		</Row>
		<Row>
			<h1>Home</h1>
		</Row>
	</Fragment>
)

export default Header
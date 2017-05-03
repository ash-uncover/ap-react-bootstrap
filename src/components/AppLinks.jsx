import React from 'react'

import { Grid, Button } from 'lib/exports'

import './App.scss'

class AppLinks extends React.Component {

	constructor(props) {
		super(props)
		this.state = { scroll: 15 }
	}


	render() {
		return (
			<Grid.Row>
				<h3>Bootstrap</h3>
				<h4>Basic components</h4>
				<ul>
					<li><Button comp='a' href='/bootstrap/grid' bsStyle='link' bsSize='sm'>Grid</Button></li>
					<li><Button comp='a' href='/bootstrap/labels' bsStyle='link' bsSize='sm'>Labels</Button></li>
					<li><Button comp='a' href='/bootstrap/buttons' bsStyle='link' bsSize='sm'>Buttons</Button></li>
					<li><Button comp='a' href='/bootstrap/glyphicons' bsStyle='link' bsSize='sm'>Glyphicons</Button></li>
					<li><Button comp='a' href='/bootstrap/badges' bsStyle='link' bsSize='sm'>Badges</Button></li>
					<li><Button comp='a' href='/bootstrap/Forms' bsStyle='link' bsSize='sm'>Forms</Button></li>
					<li><Button comp='a' href='/bootstrap/panels' bsStyle='link' bsSize='sm'>Panels</Button></li>
					
				</ul>
				<h4>Iterative components</h4>
				<ul>
					<li><Button comp='a' href='/bootstrap/lists' bsStyle='link' bsSize='sm'>Lists</Button></li>
					<li><Button comp='a' href='/bootstrap/tables' bsStyle='link' bsSize='sm'>Tables</Button></li>
				</ul>

				<h3>Custom</h3>
				<h4>Miscelanous</h4>
				<ul>
					<li><Button comp='a' href='/custom/busy' bsStyle='link' bsSize='sm'>Busy indicators</Button></li>
					<li><Button comp='a' href='/custom/rater' bsStyle='link' bsSize='sm'>Raters</Button></li>
				</ul>
				<h4>Google components</h4>
				<ul>
					<li><Button comp='a' href='/custom/googleautocomplete' bsStyle='link' bsSize='sm'>Google autocomplete</Button></li>
				</ul>

				<h3>Complex</h3>
				<h4>Authentication</h4>
				<ul>
					<li><Button comp='a' href='/complex/auth' bsStyle='link' bsSize='sm'>Authentication components</Button></li>
				</ul>
			</Grid.Row>
		)
	}
}
export default AppLinks
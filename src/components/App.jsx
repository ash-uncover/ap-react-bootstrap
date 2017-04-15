import React from 'react'
import AppData from 'components/AppData'

import { Navbar, NavbarHeader, NavbarGroup, NavbarLink, Container, Row, Col } from 'lib/exports'

import Buttons from 'components/bootstrap/buttons/Buttons'
import Glyphicons from 'components/bootstrap/glyphicons/Glyphicons'

import './App.scss'

class App extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		AppData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		AppData.unregister()
	}

	onDataUpdate() {
		this.setState({ AppData: AppData })
	}

	render() {
		return (
			<div>
				<Navbar fixedTop>
					<NavbarHeader brandText='ap-react-bootstrap' brandImage='/assets/img/logo.jpg'/>
					<NavbarGroup>
						<NavbarLink text='Link' />
						<NavbarLink text='Active link' active/>
						<NavbarLink text='Disabled link' disabled/>
					</NavbarGroup>
					<NavbarGroup right>						
						<NavbarLink text='Bootstrap' />
					</NavbarGroup>
				</Navbar>
				<Container className='ap-rb-app'>
					<Row>
						<Col md={9}>
							<Glyphicons />
							<Buttons />
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}
export default App

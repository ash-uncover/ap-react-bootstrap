import React from 'react';
import AppData from 'components/App/AppData';

import { Navbar, NavbarHeader, NavbarGroup, NavbarLink, Container, Row, Col, Button, Panel, PanelFooter } from 'lib/exports'

import './App.scss'

/* This class was auto-generated by the JavaScriptWriter */
class App extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		AppData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		AppData.unregister()
	}

	onDataUpdate() {
		this.setState({ AppData: AppData });
	}

	render() {
		return (
			<div>
				<Navbar fixedTop>
					<NavbarHeader brandText='ap-react-bootstrap' />
					<NavbarGroup>
						<NavbarLink text='Active link' active/>
						<NavbarLink text='link' />
					</NavbarGroup>
					<NavbarGroup right>
						<NavbarLink text='Disabled link' disabled/>
						<NavbarLink text='Bootstrap' />
					</NavbarGroup>
				</Navbar>
				<Container className='ap-rb-app'>
					<Row>
						<Col md={9}>
							<h1>Buttons</h1>

							<h2>Button tags</h2>

							<h2>Options</h2>
							<p>Use '<b>bsStyle</b>' to quickly create a styled button.</p>
							<Panel 
								className='ap-rb-buttons-style'
								bsStyle='default'
								footer={
									<div>
										<p>
											<code style={{color:'grey', display:'block'}}>{"<!-- Unstyled button -->"}</code>
											<code style={{display:'block'}}>{"<Button>No Style</Button>"}</code>
										</p>
										<p>
											<code style={{color:'grey', display:'block'}}>{"<!-- Standard button -->"}</code>
											<code style={{display:'block'}}>{"<Button bsStyle='default'>Default</Button>"}</code>
										</p>
										<p>
											<code style={{color:'grey', display:'block'}}>{"<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->"}</code>
											<code style={{display:'block'}}>{"<Button bsStyle='primary'>Primary</Button>"}</code>
										</p>
										<p>
											<code style={{color:'grey', display:'block'}}>{"<!-- Indicates a successful or positive action -->"}</code>
											<code style={{display:'block'}}>{"<Button bsStyle='success'>Success</Button>"}</code>
										</p>
										<p>
											<code style={{color:'grey', display:'block'}}>{"<!-- Contextual button for informational alert messages -->"}</code>
											<code style={{display:'block'}}>{"<Button bsStyle='info'>Info</Button>"}</code>
										</p>
										<p>
											<code style={{color:'grey', display:'block'}}>{"<!-- Indicates caution should be taken with this action -->"}</code>
											<code style={{display:'block'}}>{"<Button bsStyle='warning'>Warning</Button>"}</code>
										</p>
										<p>
											<code style={{color:'grey', display:'block'}}>{"<!-- Indicates a dangerous or potentially negative action -->"}</code>
											<code style={{display:'block'}}>{"<Button bsStyle='danger'>Danger</Button>"}</code>
										</p>
										<p>
											<code style={{color:'grey', display:'block'}}>{"<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->"}</code>
											<code style={{display:'block'}}>{"<Button bsStyle='link'>Link</Button>"}</code>
										</p>
									</div>
								}>
								<h4>Example</h4>
								<Button>No Style</Button>
								<Button bsStyle='default'>Default</Button>
								<Button bsStyle='primary'>Primary</Button>
								<Button bsStyle='success'>Success</Button>
								<Button bsStyle='info'>Info</Button>
								<Button bsStyle='warning'>Warning</Button>
								<Button bsStyle='danger'>Danger</Button>
								<Button bsStyle='link'>Link</Button>
							</Panel>

							<h2>Sizes</h2>
							<p>Fancy larger or smaller buttons? Add '<b>bsSize</b>' for additional sizes.</p>
							<Panel 
								bsStyle='default'
								footer={
									<div>
										<code style={{display:'block'}}>{"<p>"}</code>
										<code style={{display:'block'}}>&nbsp;&nbsp;{"<Button bsSize='lg' bsStyle='primary'>Large button</Button>"}</code>
										<code style={{display:'block'}}>&nbsp;&nbsp;{"<Button bsSize='lg' bsStyle='default'>Large button</Button>"}</code>
										<code style={{display:'block'}}>{"</p>"}</code>
										<code style={{display:'block'}}>{"<p>"}</code>
										<code style={{display:'block'}}>&nbsp;&nbsp;{"<Button bsStyle='primary'>Default button</Button>"}</code>
										<code style={{display:'block'}}>&nbsp;&nbsp;{"<Button bsStyle='default'>Default button</Button>"}</code>
										<code style={{display:'block'}}>{"</p>"}</code>
										<code style={{display:'block'}}>{"<p>"}</code>
										<code style={{display:'block'}}>&nbsp;&nbsp;{"<Button bsSize='sm' bsStyle='primary'>Small button</Button>"}</code>
										<code style={{display:'block'}}>&nbsp;&nbsp;{"<Button bsSize='sm' bsStyle='default'>Small button</Button>"}</code>
										<code style={{display:'block'}}>{"</p>"}</code>
										<code style={{display:'block'}}>{"<p>"}</code>
										<code style={{display:'block'}}>&nbsp;&nbsp;{"<Button bsSize='xs' bsStyle='primary'>Extra small button</Button>"}</code>
										<code style={{display:'block'}}>&nbsp;&nbsp;{"<Button bsSize='xs' bsStyle='default'>Extra small button</Button>"}</code>
										<code style={{display:'block'}}>{"</p>"}</code>
									</div>
								}>
								<h4>Example</h4>
								<p>
									<Button bsSize='lg' bsStyle='primary'>Large button</Button>
									<Button bsSize='lg' bsStyle='default'>Large button</Button>
								</p>
								<p>
									<Button bsStyle='primary'>Default button</Button>
									<Button bsStyle='default'>Default button</Button>
								</p>
								<p>
									<Button bsSize='sm' bsStyle='primary'>Small button</Button>
									<Button bsSize='sm' bsStyle='default'>Small button</Button>
								</p>
								<p>
									<Button bsSize='xs' bsStyle='primary'>Extra small button</Button>
									<Button bsSize='xs' bsStyle='default'>Extra small button</Button>
								</p>
							</Panel>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}

}
export default App;
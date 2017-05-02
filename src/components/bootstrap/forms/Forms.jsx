import React from 'react'
import FormsData from 'components/bootstrap/forms/FormsData'

import { Panel, Button, CodeXml, CodeXmlComment, Form } from 'lib/exports'

import './Forms.scss'

class Forms extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		FormsData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		FormsData.unregister()
	}

	onDataUpdate() {
		this.setState({ data: FormsData })
	}

	render() {
		return (
			<div className='ap-rb-section ap-rb-forms' id='ap-rb-forms'>
				<h1>Forms</h1>

				<h2>Basic example</h2>
				
				<p></p>

				<Panel className='ap-rb-forms-examples'>
					<Panel.Body>
						<h4>Example</h4>
						<Form>
							<Form.Group>
								<Form.Label for='exampleInputEmail'>Email address</Form.Label>
								<Form.Input id='exampleInputEmail' placeholder='Email' type='email' />
							</Form.Group>
							<Form.Group>
								<Form.Label for='exampleInputPassword1'>Password</Form.Label>
								<Form.Input id='exampleInputPassword1' placeholder='Password' type='password' />
							</Form.Group>
							<Form.Group>
								<Form.Label for='exampleInputFile'>File input</Form.Label>
								<Form.Input id='exampleInputFile' type='file' />
								<p className='help-block'>Example block-level help text here.</p>
							</Form.Group>
							<Button bsStyle='default' type='submit'>Submit</Button>
						</Form>
					</Panel.Body>
					<Panel.Footer>
						<h5>React code</h5>
						<CodeXml markup='Form'>
							<CodeXml markup='FormGroup'>
								<CodeXml markup='FormLabel' att={[{name:'for',value:'exampleInputEmail'}]}>
									Email address
								</CodeXml>
								<CodeXml markup='FormInput' att={[{name:'id',value:'exampleInputEmail'},{name:'placeholder',value:'Email'},{name:'type',value:'email'}]} />
							</CodeXml>
							<CodeXml markup='FormGroup'>
								<CodeXml markup='FormLabel' att={[{name:'for',value:'exampleInputPassword1'}]}>
									Password
								</CodeXml>
								<CodeXml markup='FormInput' att={[{name:'id',value:'exampleInputPassword1'},{name:'placeholder',value:'Password'},{name:'type',value:'password'}]} />
							</CodeXml>
							<CodeXml markup='FormGroup'>
								<CodeXml markup='FormLabel' att={[{name:'for',value:'exampleInputFile'}]}>
									File input
								</CodeXml>
								<CodeXml markup='FormInput' att={[{name:'id',value:'exampleInputFile'},{name:'type',value:'file'}]} />
								<CodeXml markup='p' att={[{name:'className',value:'help-block'}]}>
									Example block-level help text here.
								</CodeXml>
							</CodeXml>
							<CodeXml markup='Button' att={[{name:'bsStyle',value:'default'},{name:'type',value:'submit'}]}>
								Submit
							</CodeXml>
						</CodeXml>
					</Panel.Footer>
					<Panel.Footer>
						<h5>HTML output</h5>
						<CodeXml markup='form' att={[{name:'class',value:'ap-form'}]}>
							<CodeXml markup='div' att={[{name:'class',value:'form-group ap-form-group'}]}>
								<CodeXml markup='label' att={[{name:'class',value:'ap-form-label'}]}>
									Email address
								</CodeXml>
								<CodeXml markup='input' att={[{name:'class',value:'form-control ap-form-input'},{name:'id',value:'exampleInputEmail'},{name:'placeholder',value:'Email'},{name:'type',value:'email'}]} />
							</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'form-group ap-form-group'}]}>
								<CodeXml markup='label' att={[{name:'class',value:'ap-form-label'}]}>
									Password
								</CodeXml>
								<CodeXml markup='input' att={[{name:'class',value:'form-control ap-form-input'},{name:'id',value:'exampleInputPassword1'},{name:'placeholder',value:'Password'},{name:'type',value:'password'}]} />
							</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'form-group ap-form-group'}]}>
								<CodeXml markup='label' att={[{name:'class',value:'ap-form-label'}]}>
									File input
								</CodeXml>
								<CodeXml markup='input' att={[{name:'class',value:'form-control ap-form-input'},{name:'id',value:'exampleInputFile'},{name:'type',value:'file'}]} />
								<CodeXml markup='p' att={[{name:'class',value:'help-block'}]}>
									Example block-level help text here.
								</CodeXml>
							</CodeXml>
							<CodeXml markup='button' att={[{name:'class',value:'btn ap-button btn-default'},{name:'type',value:'submit'}]}>
								Submit
							</CodeXml>
						</CodeXml>
					</Panel.Footer>
				</Panel>
			</div>
		)
	}
}
export default Forms
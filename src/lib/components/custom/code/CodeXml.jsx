import React from 'react'
import Base from 'lib/components/Base'

import './ap-code.scss'

class CodeXml extends Base {

	constructor(props) {
		super(props)
		this.baseClasses = [ 'ap-code-xml' ]
		this.propsInfos = {
			required : {
			},
			optionnal : {
				children: {},
				markup: {},
				att: {},
				after: {},
				inline: {}
			}
		}
	}

	buildAttributes() {
		return (this.props.att || []).map(this._buildAttribute)
	}
	_buildAttribute(att, i) {
		return (
			<span className='ap-code-xml-att' key={att.name}>
				<span className='ap-code-xml-att-name'>
					{' ' + att.name + (att.value ? '=' : '')}
				</span>
				{ att.value ?
				<span className='ap-code-xml-att-value'>
					{(att.value.startsWith('{') ? '' : "'") + att.value + (att.value.endsWith('}') ? '' : "'")}
				</span>
				: ''}
			</span>
		)
	}

	_buildChildren() {
		for (let i = 0 ; i < (this.props.children || []).length ; i++) {
			
		}
	}

	_buildClasses() {
		let classes = this.baseClasses.slice()
		if (this.props.inline) classes.push('ap-code-inline')	
		return classes
	}

	render() {
		this.buildProps('CodeXml')
		return (
			<code className={this.className}>
			{this.props.markup ?
				<span className='ap-code-xml-markup'>{'<' + this.props.markup}</span>
			: '' }
			{this.props.markup ?
				this.buildAttributes()
			: '' }
			{this.props.markup && !this.props.children ?
				<span className='ap-code-xml-markup'>{'/>'}</span>
			: '' }
			{this.props.markup && this.props.children ?
				<span className='ap-code-xml-markup'>{'>'}</span>
			: '' }
				<span className='ap-code-xml-content'>{this.props.children}</span>
			{this.props.markup && this.props.children ?
				<span className='ap-code-xml-markup'>{'</' + this.props.markup + '>'}</span>
			: '' }
			{this.props.after ? this.props.after : ''}

			</code>
		)
	}
}
export default CodeXml

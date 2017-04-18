import React from 'react'
import BusyData from 'components/custom/busy/BusyData'

import { Panel, PanelBody, PanelFooter, BusyCircles, CodeXml } from 'lib/exports'

import './Busy.scss'

class Busy extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		BusyData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		BusyData.unregister()
	}

	onDataUpdate() {
		this.setState({ BusyData: BusyData })
	}

	render() {
		return (
			<div className='ap-ct-busy'>
                <h1>Busy indicators</h1>

                <h2>Busy circles</h2>
                <p>Busy circles is a continous indicator that can be used to display content while an item is loading.</p>

                <Panel>
                    <PanelBody>
                        <BusyCircles />
                    </PanelBody>
                    <PanelFooter>
                        <h5>React code</h5>
                        <CodeXml markup='BusyCircles' />
                    </PanelFooter>
                    <PanelFooter>
                        <h5>HTML output</h5>
                        <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circles'}]}>
                            <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circles-container'}]}>
                                <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circle ap-busy-circle-1'}]} />
                                <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circle ap-busy-circle-2'}]} />
                                <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circle ap-busy-circle-3'}]} />
                                <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circle ap-busy-circle-4'}]} />
                                <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circle ap-busy-circle-5'}]} />
                                <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circle ap-busy-circle-6'}]} />
                                <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circle ap-busy-circle-7'}]} />
                                <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circle ap-busy-circle-8'}]} />
                            </CodeXml>
                        </CodeXml>
                    </PanelFooter>
                </Panel>
            </div>
		)
	}

}
export default Busy

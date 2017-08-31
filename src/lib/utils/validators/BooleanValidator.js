import ValidatorBase from 'lib/utils/validators/ValidatorBase'

export default class BooleanValidator extends ValidatorBase {

	constructor(props) {
		super(props)
	}

	getState(value) {
		if (value === true) {
			return ValidatorBase.STATES.SUCCESS
		} else {
			return ValidatorBase.STATES.ERROR
		}
	}
}
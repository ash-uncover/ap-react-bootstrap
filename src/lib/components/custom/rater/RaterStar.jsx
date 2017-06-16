import React from 'react'
import Base from 'lib/components/Base'

import { Glyphicon } from 'lib/exports'

import './ap-rater-star.scss'

class RaterStar extends Base {

    constructor(props) {
        super(props)
        this.baseClasses = [ 'ap-rater-star' ]
        // Sub components properties
        this.fullStarProps = { className: 'ap-rater-star-full', glyph: 'star' }
        this.emptyStarProps = { className: 'ap-rater-star-empty', glyph: 'star-empty' }
        // Component properties
        this.propsInfos = {
            required : {
            },
            optionnal : {
                value: {},
                starMax: 5
            }
        }
    }
    
    // Rendering functions //
    // --------------------------------------------------------------------------------

    _resolveValue() {
        let value = this.props.value || 0
        if (value < 0 || value > this.props.starMax) {
            return 0
        }
        return Math.round(value)
    }

    _buildFullStars(nb) {
        let result = []
        for (let i = 0 ; i < nb ; i ++) {
            result.push(<Glyphicon key={'full-' + i} {...this.fullStarProps} />)
        }
        return result
    }

    _buildEmptyStars(nb) {
        let result = []
        for (let i = 0 ; i < nb ; i ++) {
            result.push(<Glyphicon key={'empty-' + i} {...this.emptyStarProps} />)
        }
        return result   
    }
    
    render() {
        this.buildProps('RaterStar')
        let value = this._resolveValue()
        return (
            <div className={this.className}>
                {this._buildFullStars(value)}
                {this._buildEmptyStars(this.props.starMax - value)}
            </div>
        )
    }
}
export default RaterStar

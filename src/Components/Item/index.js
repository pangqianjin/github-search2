import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
    static propTypes = {
        html_url: PropTypes.string.isRequired,
        img_src: PropTypes.string.isRequired,
        img_desp: PropTypes.string.isRequired
    }

    render() {
        const {img_src, img_desp, html_url} = this.props
        return (
            <div className='result'>
                <a href={html_url}>
                    <img src={img_src} alt='head'></img>
                </a>
                <h5>{img_desp}</h5>
            </div>
        )
    }
}

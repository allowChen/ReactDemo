import React, {Component} from 'react'
import Swiper from 'swiper'

import 'swiper/dist/css/swiper.css'
import './spell.css'

class Spell extends Component {

    componentDidMount() {
        new Swiper('.swiper-container', {
            loop: true,
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
    }

    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide brown">700 X 300</div>
                    <div className="swiper-slide blueviolet">700 X 300</div>
                    <div className="swiper-slide aqua">700 X 300</div>
                    <div className="swiper-slide darkorange">700 X 300</div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        )
    }
}

export default Spell
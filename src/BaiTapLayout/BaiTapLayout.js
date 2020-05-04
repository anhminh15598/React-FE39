import React, { Component } from 'react';
import Header from './Header';
import Slider from './Slider';
import Productlist from './Productlist';
import Promotion from './Promotion';


export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Slider></Slider>
                <Productlist></Productlist>
                <Promotion></Promotion>
            </div>
        )
    }
}

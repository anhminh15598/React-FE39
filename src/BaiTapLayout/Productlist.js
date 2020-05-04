import React, { Component } from 'react'
import Product from './Product'

export default class Productlist extends Component {
    render() {
        return (
            <div>
                <section id="smartphone" className="container-fluid bg-dark pt-5 pb-5">
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                    </div>

                </section>

            </div>
        )
    }
}

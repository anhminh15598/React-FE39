import React, { Component } from 'react'

export default class BaiTapState extends Component {
    state = {
        imgSrc: "./CarBasic/Products/red-car.jpg",
    }

    changeColor = (imgSrcColor) => {
        this.setState({
            imgSrc: imgSrcColor
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <img style={{ width: '100%' }} src={this.state.imgSrc} alt="red-car" />
                    </div>
                    <div className="col-5 m-2">
                        <div className="card text-primary bg-light">
                            <div className="card-header">
                                Hãy chọn màu xe
                        </div>

                            <div className="card-body border">

                                <div className="card-body border mb-2" style={{ cursor: 'pointer' }} onClick={() => { this.changeColor("./CarBasic/Products/silver-car.jpg") }}>
                                    <div className="xe1 row">
                                        <div className="col-2">
                                            <img style={{ width: "100%" }} src="./CarBasic/icons/icon-silver.jpg" alt="icon-silver" />
                                        </div>
                                        <div className="col-10">
                                            <h3>silver</h3>
                                            <p>Xe được phủ sơn đỏ ...</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body border mb-2" style={{ cursor: 'pointer' }} onClick={() => { this.changeColor("./CarBasic/Products/black-car.jpg") }}>
                                    <div className="xe2 row">
                                        <div className="col-2">
                                            <img style={{ width: "100%" }} src="./CarBasic/icons/icon-black.jpg" alt="icon-black" />
                                        </div>
                                        <div className="col-10 ">
                                            <h3>black</h3>
                                            <p>Xe được phủ sơn ...</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body border mb-2" style={{ cursor: 'pointer' }} onClick={() => { this.changeColor("./CarBasic/Products/steel-car.jpg") }}>
                                    <div className="xe3 row">
                                        <div className="col-2">
                                            <img style={{ width: "100%" }} src="./CarBasic/icons/icon-steel.jpg" alt="icon-steel" />
                                        </div>
                                        <div className="col-10">
                                            <h3>steel</h3>
                                            <p>Xe được phủ sơn...</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body border mb-2" style={{ cursor: 'pointer' }} onClick={() => { this.changeColor("./CarBasic/Products/Red-car.jpg") }}>
                                    <div className="xe4 row">
                                        <div className="col-2">
                                            <img style={{ width: "100%" }} src="./CarBasic/icons/icon-red.jpg" alt="icon-red" />
                                        </div>
                                        <div className="col-10">
                                            <h3>Red</h3>
                                            <p>Xe được phủ sơn đỏ ...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </div >
        )
    }
}

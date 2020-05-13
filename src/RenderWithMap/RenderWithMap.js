import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    data = [
        { id: 1, name: 'I PHONE X', price: 1000 },
        { id: 2, name: 'SS Note 10', price: 2000 },
        { id: 3, name: 'Sony XZ', price: 3000 }
    ]

    renderTable = () => {
        // let arrContent = [];
        //Duyệt mảng
        //Cách 1:
        // for (let index = 0; index < this.data.length; index++) {
        //     let product = this.data[index];
        //     let tagProduct =
        //         <tr key={index}>
        //             <td>{product.id}</td>
        //             <td>{product.name}</td>
        //             <td>{product.price}</td>
        //             <td></td>
        //         </tr>;
        //     //Lấy mảng arrcontent púh đối tượng jsx vào sau mỗi lần duyệt
        //     arrContent.push(tagProduct);
        // }
        //----------------------
        //Cách 2:
        let arrContent = this.data.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td></td>
                </tr>
            )

        })


        return arrContent;

    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Product List</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}


                        {/* Cách 3:
                        {
                            this.data.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td></td>
                                    </tr>
                                )
                    
                            })
                        } */}
                    </tbody>
                </table>
            </div>
        )
    }
}

//rcc
import React, { Component } from 'react'

export default class Demo extends Component {
    //Các phương thức khác

    //Các thuộc tính khác (Thuộc tính được tạo trong lớp đối tượng)
    title = 'front-end-39';

    //Phương thức render => Chứa nôi dung giao diện của compenents
    render() {
        //Biến được chứa trong hàm
        const name = 'name';
        return (
            <div>
                <h1>Demo components</h1>
                <div className="card text-left">
                    <img className="card-img-top" src="holder.js/100px180/" alt />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showMess = () => {
        console.log("haha");
    }
    showMessParam = (title) => {
        alert(title);
    }
    showMessCallback = (title, param2, tag) => {
        console.log("tag", tag.target);

        console.log("title", title);
    }
    render() {
        return (
            <div>
                {/* Cách 1: Định nghĩa function trực tiếp */}
                <button className="m-3" id="btn" onClick={function () {
                    alert("Hello");
                }}>Click me</button>
                {/* Hay dùng */}
                <button className="btn btn-success" id="btn" onClick={() => {
                    alert("hello2")
                }}>Click me</button>
                {/* Truyền tham số arrow function */}
                <button className="btn btn-success" id="btn" onClick={() => {
                    this.showMessParam("haha")
                }}>Click me</button>
                {/* Cách 2: Định nghĩa với callback function */}
                <button onClick={this.showMess}>Show Mess</button>
                {/* Truyền tham số dung callback function */}
                <button onClick={this.showMessCallback.bind(this, "day la tham so", "tham so 3")}>callback</button>
            </div>
        )
    }
}

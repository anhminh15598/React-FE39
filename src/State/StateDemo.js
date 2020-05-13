import React, { Component } from 'react'

export default class StateDemo extends Component {

    //Thuộc tính có sẵn của class component
    //Dùng để chứa các giá trị thay đổi khi người dùng thao tác giao diện
    state = {
        status: false,
        name: 'Minh'
    }

    //2 Thuộc tính

    renderContent = () => {
        if (this.state.status) {
            return <h1>Hello {this.name}</h1>
        }
        return <button onClick={() => { this.login() }}>Đăng nhập</button>
    }

    login = () => {
        // this.state.status = true; Không được gán giá trị state trực tiếp 
        //Phương thức this.setState(newState); dùng để set lại giá trị mới cho state, và gọi lại hàm cho rẹnder. 
        //this.setState là hàm bất đồng bộ
        // let newState = {
        //     status: true
        // }
        // this.setState(newState);
        //Tương đương
        this.setState({ status: true, name: 'hihi' }, () => {
            console.log(this.state.status);
        })
        //-----

    }

    render() {

        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

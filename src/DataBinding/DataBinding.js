import React, { Component } from 'react'

export default class DataBinding extends Component {
    title = "hello";
    renderTitle = () => {
        return <h1>{this.title}</h1>
    }
    render() {
        //Biến title
        const title = 'cybersoft';
        const hocVien = { ma: 1, tenHV: 'Teo' };

        //Binding hàm => Phải có gía trị trả về là number, string, component,...
        //Nếu hàm trả về là component thì nội dung component phải được bao phủ bởi 1 thẻ
        const renderImg = () => {
            return <img src="https://www.gocbao.com/wp-content/uploads/2020/04/anh-dep-hoa-huong-duong-va-mat-troi_022805970-1-1181x800-6.jpg" />
        }
        return (
            <div>
                <h3>{this.title}</h3>
                <p id="txt">{title}</p>
                <ul>
                    <li>Ma: {hocVien.ma}</li>
                    <li>Ten: {hocVien.tenHV}</li>
                </ul>
                <div className="container">
                    {renderImg()};
                </div>
            </div >
        )
    }
}

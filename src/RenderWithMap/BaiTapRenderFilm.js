import React, { Component } from 'react'


export default class BaiTapRenderFilm extends Component {

    renderFilm = () => {

        console.log(this.props.mangPhim);
        return this.props.mangPhim.map((phim, index) => {
            return <div className="col-3" key={index}>
                <div className="card text-black">
                    <img style={{ width: "100%" }} className="card-img-top" src={phim.hinhAnh} alt={phim.tenPhim} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa.length} ? <p>{phim.moTa.substr(0, 50)}...</p></p>
                    </div>
                </div>
            </div >
        })


    }



    render() {
        return (
            <div className="row">
                {this.renderFilm()}
            </div >
        )
    }
}

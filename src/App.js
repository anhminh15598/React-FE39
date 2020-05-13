import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import BaiTapState from './State/BaiTapState';
// import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapRenderFilm from './RenderWithMap/BaiTapRenderFilm';
// import HandleEvent from './HandleEvent/HandleEvent';
// import StateDemo from './State/StateDemo';
// import DataBinding from './DataBinding/DataBinding';
// import BaiTapLayout from './BaiTapLayout/BaiTapLayout';
import DataFilm from './Data/DataFilms.json';



function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout></BaiTapLayout> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <BaiTapState /> */}
      {/* <RenderWithMap /> */}
      <BaiTapRenderFilm
        mangPhim={DataFilm} />
    </div>
  );
}

export default App;

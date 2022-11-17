import React from 'react';
import "./index.scss"

function Index(props) {
  return (
    <div className="box" angle={props.angle}>
      <img width={"100%"} src={"https://wallpapershome.ru/images/pages/pic_h/144.jpg"}/>
      <div>{props.angle}</div>
    </div>
  );
}

export default Index;

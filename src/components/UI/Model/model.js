import React from "react";
import sty from "./Modal.module.css";
import ReactDom from "react-dom";

const BackDrop = ({backDropOnclose}) => {
  return <div className={sty.backdrop} onClick={backDropOnclose}></div>;
};
const ModelOverLay = (props) => { 
  return (
    <div className={sty.modal}>
      <div className={sty.content}>{props.children}</div>
    </div>
  );
};

const Model = (props) => {
   
  const overlays = document.getElementById("overlays");
  return (
    <>
      {ReactDom.createPortal(<BackDrop  backDropOnclose={props.handleonClose}/>, overlays)}
      {ReactDom.createPortal(
        <ModelOverLay>{props.children}</ModelOverLay>,
        overlays
      )}
    </>
  );
};
export default Model;

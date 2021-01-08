import React, { useState } from "react";
import { connect } from "react-redux";
import Item from "./Item";

const List = (props) => {
  console.log("Props in the List component: ", props);
  return (
    <div>
      <h3>This is the List component. </h3>
      {props.list.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};
export default connect(mapStateToProps, {})(List);

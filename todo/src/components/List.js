import React, { useState } from "react";
import { connect } from "react-redux";
import Item from "./Item";

const List = (props) => {
  console.log("Props in the List component: ", props);
  return (
    <div>
      {props.list.length > 0 ? (
        <div>
          <h3>Here are your pending tasks: </h3>
          {props.list.map((item) => (
            <Item item={item} key={item.id} />
          ))}{" "}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};
export default connect(mapStateToProps, {})(List);

import React, { useState } from "react";
import { connect } from "react-redux";
import { markCompleted } from "../store/actions";

const Item = (props) => {
  console.log("Props in the Item component: ", props);

  const [completed, setCompleted] = useState(false);
  console.log("completed?", completed);
  return (
    <div>
      {completed ? null : (
        <>
          <p>{props.item.item}</p>
          <button
            onClick={() => {
              props.markCompleted(props.item);
              setCompleted(true);
            }}
          >
            mark as completed
          </button>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};
export default connect(mapStateToProps, { markCompleted })(Item);

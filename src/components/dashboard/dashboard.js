import React from "react";
import face from "../../img/face.jpg";
import edit from "../../img/edit.svg";

import "./dashboard.css";
import Tag from "../tags/tag";
import Bloglist from "../bloglist/bloglist";
import Fab from "../fab/fab";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard__img-wrapper">
          <img src={face} alt="Face" className="dashboard__img" />
        </div>
        <div className="dashboard__person-dets">
          <h3 className="dashboard__person-name">Mutale Katebe</h3>
          <p className="dashboard__person-email">katebe.mutale@gmail.com</p>
          <button className="dashboard__person-edit">
            <img src={edit} alt="Edit" />
            <p>Edit</p>
          </button>
        </div>
        {/* <h3 className="dashboard__list-title">Your Blogs</h3> */}
        <div className="dashboard__tag-wrapper">
          <div className="dashboard__tag selected">My blogs</div>
          <div className="dashboard__tag">Saved Blogs</div>
        </div>
        <div className="dashboard__bloglist">
          <Bloglist />
        </div>
      </div>
      <Fab />
    </>
  );
};

export default Dashboard;

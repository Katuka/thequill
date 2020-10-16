import React from "react";
import face from "../../img/face.jpg";
import edit from "../../img/edit.svg";

import "./dashboard.css";
import BlogList from "../blogcard/blogcardContainer";
import Fab from "../fab/fab";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <h2 className="dashboard-title">Dashboard</h2>
        <div className="dashboard-card">
          <div>   
            <div className="dashboard__img-wrapper">
              <img src={face} alt="Face" className="dashboard__img" />
            </div>
            <div className="dashboard__person-dets">
              <h4 className="dashboard__person-name">Mutale Katebe</h4>
              <div className="dashboard__person-email">katebe.mutale@gmail.com</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto libero officia.</p>
            </div>
          </div>
          <img src={edit} alt="Edit" className="edit" />
        </div>
        <h3 className="dashboard__list-title">Your Blogs</h3>
        <div className="dashboard__bloglist">
          <BlogList />
        </div>
      </div>
      <Fab />
    </>
  );
};

export default Dashboard;

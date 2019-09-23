import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const page = (
  <div className="main">
    <section className="top-box">
      <div className="nav">
        <img src="/images/ironhack-logo.svg" alt="" />
        <img src="/images/menu-top.svg" alt="" />
      </div>
      <div className="headings">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn a front end framework from scratch to become a ninja
          developer.
        </p>
        <button>Awesome!</button>
      </div>
      {/* <img className="react-logo" src="./images/react-logo.svg" alt="" /> */}
    </section>

    <section className="row">
      <div className="icons-row">
        <div className="card">
          <img src="/images/icon1.png" alt="" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="card">
          <img src="/images/icon2.png" alt="" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their states.</p>
        </div>
        <div className="card">
          <img src="/images/icon3.png" alt="" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="card">
          <img src="/images/icon4.png" alt="" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </section>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));

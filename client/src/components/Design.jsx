import React, { Component } from "react";
import "./Design.css";
import "../bootstrap/css/bootstrap.min.css";

const port = process.env.PORT || 5000;

export default class Design extends Component {
  downVid = () => {
    var link = document.getElementById("URL-input").value;

    link.length > 0 ? this.sendURL(link) : alert("Please Enter Value");
  };

  sendURL = (URL) => {
    window.location.href = `http://localhost:${port}/download?URL=${URL}`;
  };

  thumbChange = async () => {
    var img = document.getElementById("thumb");
    var link = document.getElementById("URL-input").value;

    var st = link.split("").splice(32, 11).join("");

    var src = await `https://i.ytimg.com/vi/${st}/maxresdefault.jpg`;

    if (st.length == 11) {
      img.src = src;
    } else {
      img.src = "";
    }
  };

  downList = () => {
    var link = document.getElementById("URL-input").value;

    link.indexOf("playlist?list") != -1
      ? (window.location.href = `http://localhost:${port}/downloadlist?URL=${link}`)
      : alert("Please Enter Valid Link");
  };

  render() {
    return (
      <div>
        <div className="header">
          <div
            className="inner-header flex"
            style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
          >
            <h1 style={{ fontSize: "60px", color: "black" }}>
              {" "}
              <sub> ( YT ) </sub>{" "}
              <sup style={{ fontSize: "medium" }}>Downloader</sup>
            </h1>
          </div>

          <div>
            <svg
              className="waves"
              viewBox="0 24 180 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.5)"
                />

                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
          {/* <!--Waves end--> */}
        </div>

        <br></br>

        <form name="form" className="form-container mt-4">
          <center>
            <div className="container">
              <div className="row">
                <div className="col-sm-8 p-2">
                  <input
                    type="text"
                    placeholder="Past Your Link Here"
                    className="form-control ipbox URL-input"
                    id="URL-input"
                    onChange={this.thumbChange}
                  />
                </div>

                <div className="col-sm-4 p-1">
                  <button
                    type="button"
                    className="btn btn-dark convert-button"
                    value="Download"
                    onClick={this.downVid}
                  >
                    Download Video
                  </button>

                  <span> OR </span>

                  <button
                    type="button"
                    className="btn btn-dark convert-button"
                    value="Download"
                    onClick={this.downList}
                  >
                    Playlist
                  </button>
                </div>
              </div>
            </div>
          </center>
        </form>

        <br></br>

        <div className="container display-4 card p-5 shadow rounded">
          <img src="" id="thumb" style={{ width: "100%", height: "30%" }} />
        </div>

        <br></br>

        <footer className="page-footer font-small blue">
          {/* <!-- Copyright --> */}
          <div className="footer-copyright text-center py-3">
            © 2020 Copyright Prashant & Haresh
          </div>
          {/* <!-- Copyright --> */}
        </footer>
      </div>
    );
  }
}

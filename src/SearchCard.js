import React, { Component } from "react";
import {
  Button,
  Input,
  Footer,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
} from "mdbreact";
// import Pagination from '@mui/material/Pagination';
import TextField from "@mui/material/TextField";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
import Pagination from "@mui/material/Pagination";
import Tooltip from "@mui/material/Tooltip";

import Stack from "@mui/material/Stack";

import slogon from "./Slogon.json";

class App extends Component {
  state = {
    search: "",
  };
  count = 0;
  renderslogon = (slogon) => {
    const { search } = this.state;
    var code = slogon.code.toLowerCase();
    this.count++;
    // console.log(this.count);

    if (this.count % 2 == 0) {
      return (
        <div className="col-md-6" style={{ marginTop: "20px" }}>
          <Tooltip placement="right" title="Copied!">
            <Card>
              <button
                style={{ border: "none" }}
                onClick={() => {
                  navigator.clipboard.writeText(slogon.name);
                }}
              >
                <CardBody style={{ background: "#F2F2F2" }}>
                  <h6 style={{ fontSize: "16px", fontWeight: "450" }}>
                    {slogon.name}
                  </h6>
                </CardBody>
              </button>
            </Card>
          </Tooltip>
        </div>
      );
    } else {
      return (
        <div className="col-md-6" style={{ marginTop: "20px" }}>
          <Tooltip placement="left" title="Copied!">
            <Card>
              <button
                style={{ border: "none" }}
                onClick={() => {
                  navigator.clipboard.writeText(slogon.name);
                }}
              >
                <CardBody style={{ background: "#F2F2F2" }}>
                  <h6 style={{ fontSize: "16px", fontWeight: "450" }}>
                    {slogon.name}
                  </h6>
                </CardBody>
              </button>
            </Card>
          </Tooltip>
        </div>
      );
    }
  };

  onchange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredslogon = slogon.filter((slogon) => {
      return slogon.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">
        <main
          style={{ marginTop: "4rem", paddingTop: "3%", paddingBottom: "3%" }}
        >
          <div className="container">
            <h2 className="font-weight-bold topHead">Free slogan maker</h2>
            <p className="paraHead">
              Simply enter a term that describes your business, and get up to
              1,000 <br /> relevant slogans for free.
            </p>

            <h7 className="paraHead">Word for your slogan</h7>
            <div className="row">
              <div className="col">
                <TextField
                  id="outlined-basic"
                  label="Search"
                  variant="outlined"
                  className="mt-2 h-25 w-50 mainInput"
                  onChange={this.onchange}
                />
                <div className="mt-2">
                  <button
                    style={{
                      backgroundColor: "#146EB4",
                      color: "white",
                      boxShadow: "none",
                      fontWeight: "450",
                    }}
                    className="btn my-5"
                  >
                    Generate Slogans
                  </button>
                </div>

                <h6>
                  We have generated {filteredslogon.length} slogans for{" "}
                  {this.state.search}
                </h6>
                <button
                  style={{
                    backgroundColor: "#146EB4",
                    color: "white",
                    boxShadow: "none",
                    fontWeight: "450",
                    marginLeft: "940px",
                    marginTop: "-55px",
                    width: "160px",
                    fontSize: "0.88rem",
                    textAlign: "center",
                  }}
                  className="btn btn-outline-primary"
                >
                  <a
                    href={`data:text/json;charset=utf-8,${encodeURIComponent(
                      JSON.stringify(filteredslogon)
                    )}`}
                    download="filename.json"
                  >
                    {`Download`}
                  </a>
                </button>
              </div>

              <div className="col" />
            </div>
            <div className="row">
              {filteredslogon.map((slogon) => {
                return this.renderslogon(slogon);
              })}

              <div className="d-flex justify-content-center mt-5">
                <Pagination count={10} color="primary" />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

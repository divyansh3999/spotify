import React from "react";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Library from "./Library";
import List from "./List";

export default function Home() {
  return (
    <>
      {/* {code} */}

      <div className="container-fluid">
        <div className="d-grid gap-3">
          <div className="row">
            <div className="col-md-2 p-0">
              <div className="bg-light">
                <Dashboard />
              </div>
            </div>
            <div className="col-md-10 p-0">
              <div className="homeContent">
                <Header />
                {/* <Library /> */}
                {/* <List /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

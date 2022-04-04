import React from "react";
import NewMusic from "../images/music.jpg";

export default function Music({albumFunc}) {
  return (
    <>
      <div className="row music px-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Artists Name</th>
              <th scope="col">Play Song</th>
            </tr>
          </thead>
          <tbody>
              {
                albumFunc
              }
          </tbody>
        </table>
      </div>
    </>
  );
}

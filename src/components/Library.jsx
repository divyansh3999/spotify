import React from "react";

export default function Library() {
  return (
    <>
      <div className="row g-0 px-5 overflow-hidden library flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col-auto d-none d-lg-block">
          <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb8ae7f2aaa9817a704a87ea36/2/en/large" />
        </div>
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block text-muted">PLAYLIST</strong>
          <h3 className="mb-0 fw-bold text-light">Daily Mix 2</h3>
          <div className="mb-1 text-muted">
            Justin Bieber, Alan Walker, Andy Grammer and more
          </div>
          <p className="card-text text-muted mb-auto">
            Spotify. 50 songs, 2 hr 33 min
          </p>
        </div>
      </div>    
    </>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";
import Library from "./Library";
import Play from "../images/play.png";

export default function Header() {
  const CLIENT_ID = "e6e1b8da714c4b1b83deab90f566d24d";
  const REDIRECT_URI = "http%3A%2F%2Flocalhost%3A3000%2F";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  //   search
  const searchAlbum = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "album",
      },
    });

    console.log(data);
    setAlbum(data.albums.items);
  };

  const renderAlbum = () => {
    return album.map((data, id) => (
      <tr key={id}>
        <th scope="row">1</th>
        <td>
          <img src={data.images[0].url} alt="" />
          {data.name}
        </td>
        <td>{data.artists[0].name}</td>
        <td>
          <a href={data.external_urls.spotify} target="_blank">
            <img src={Play} alt="" />
          </a>
        </td>
      </tr>
    ));
  };
  return (
    <>
      <header className="p-3 mb-3">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-end">
            <div className="search-box">
              <form onSubmit={searchAlbum}>
                <button type={"submit"} className="btn-search">
                  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </button>
                <input
                  type="text"
                  onChange={(e) => setSearchKey(e.target.value)}
                  className="input-search"
                  placeholder="Type to Search..."
                />
              </form>
            </div>
            {!token ? (
              <a
                className="authBtn"
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
              >
                <span>Login</span>
              </a>
            ) : (
              <button className="authBtn" onClick={logout}>
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>
      </header>
      <Library />
      <List albumFunc={renderAlbum()} />
    </>
  );
}

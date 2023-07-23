import React from "react";
import Bookmark from "@material-ui/icons/Bookmark";
import "./styles.scss";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="container">
          <div>
            <Bookmark />
            <h1>project Bookmark</h1>
          </div>
        </div>
      </nav>
    </div>
  );
}

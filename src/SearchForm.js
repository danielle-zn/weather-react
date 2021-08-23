import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form>
        <div className="search-font">
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Search city..."
                className="form-control search-input"
                autoFocus="on"
                autoComplete="off"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="form-control btn-outline-dark search-button"
              />
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-outline-dark current-button"
              >
                Current
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

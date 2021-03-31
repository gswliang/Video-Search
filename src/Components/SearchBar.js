import React, { useState } from "react";

const SearchBar = ({ getValue }) => {
  const [value, setValue] = useState("");

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    getValue(value);
  };

  return (
    <div className="ui center aligned segment">
      <h2>影片搜尋： </h2>
      <form className="ui left icon action input huge" onSubmit={onSubmitForm}>
        <i className="search icon"></i>
        <input
          type="text"
          placeholder="Search.."
          onChange={(item) => {
            setValue(item.target.value);
          }}
        />
        <button className="ui primary button" onSubmit={onSubmitForm}>
          搜尋
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

import React from "react";

export default function(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>Journal Title:</label>
      <input
        value={props.values.title}
        name="title"
        onChange={props.onChange}
      />
      <label>description:</label>
      <input
        value={props.values.description}
        name="description"
        onChange={props.onChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}

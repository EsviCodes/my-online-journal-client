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
      <label>Date:</label>
      <input value={props.values.date} name="date" onChange={props.onChange} />
      <label>Summery:</label>
      <input
        value={props.values.summery}
        name="summery"
        onChange={props.onChange}
      />
      <input type="submit" />
    </form>
  );
}

import React from "react";

export default function JournalDetails(props) {
  console.log(props);
  if (!props.journal.title) return "Loading";

  return (
    <div>
      <h3>Journal: {props.journal.title}</h3>
      <p>{props.journal.description}</p>
      <ul>
        {props.journal.entries.map(entry => {
          return (
            <div key={entry.id}>
              <h1>{entry.title}</h1>
              <p>{entry.entry}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

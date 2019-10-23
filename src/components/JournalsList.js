import React from "react";
import { Link } from "react-router-dom";

export default function JournalsList(props) {
  if (!props.journals) return "Loading";

  return (
    <div>
      {props.journals.map(journal => {
        return (
          <li key={journal.id}>
            <Link to={`/journals/${journal.id}`}>{journal.title}</Link>
          </li>
        );
      })}
    </div>
  );
}

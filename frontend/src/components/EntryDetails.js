import "../stylesheets/EntryDetail.css";
import { useEntryContext } from "../hooks/useEntryContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const EntryDetail = ({ entry }) => {
  const { dispatch } = useEntryContext();

  const handleClick = async () => {
    const response = await fetch(`/api/entry/${entry._id}`, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_ENTRY", payload: json });
    }
  };

  return (
    <div className="entryDetail">
      <h3>{entry.title}</h3>

      <div className="details">
        <p>
          <strong>Description: </strong>
          {entry.description}
        </p>
        <p id="date">
          <strong>Date: </strong>
          {formatDistanceToNow(new Date(entry.createdAt), { addSuffix: true })}
        </p>
      </div>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default EntryDetail;

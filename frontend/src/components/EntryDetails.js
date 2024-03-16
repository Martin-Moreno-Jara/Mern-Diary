import "../stylesheets/EntryDetail.css";

const EntryDetail = ({ entry }) => {
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
          {entry.date}
        </p>
      </div>
    </div>
  );
};

export default EntryDetail;

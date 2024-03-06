import "../stylesheets/EntryDetail.css";

const EntryDetail = ({ entry }) => {
  return (
    <div className="entryDetail">
      <h3>{entry.title}</h3>

      <div className="details">
        <p>
          <strong>Date: </strong>
          {entry.date}
        </p>
        <p>
          <strong>Description: </strong>
          {entry.description}
        </p>
        <p>{entry.createdAt}</p>
      </div>
    </div>
  );
};

export default EntryDetail;

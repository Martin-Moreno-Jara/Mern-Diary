import "../stylesheets/EntryDetail.css";

const EntryDetail = ({ key, entry }) => {
  return (
    <div className="entryDetail">
      <h4>{entry.title}</h4>

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

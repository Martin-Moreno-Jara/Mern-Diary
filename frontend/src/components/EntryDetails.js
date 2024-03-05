import "../stylesheets/EntryDetail.css";

const EntryDetail = ({ title, description, date }) => {
  return (
    <div className="entryDetail">
      <div className="title">{title}</div>
      <div className="details">
        {description}
        <br />
        {date}
      </div>
    </div>
  );
};

export default EntryDetail;

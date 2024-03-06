import { useEffect, useState } from "react";
import EntryDetail from "../components/EntryDetails";
import "../stylesheets/Home.css";

const Home = () => {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch("/api/entry");
      const json = await response.json();
      if (response.ok) {
        setEntry(json);
      }
    };

    fetchEntries();
  }, []);
  return (
    <div className="home">
      <div className="entries">
        {entry &&
          entry.map((EachEntry) => (
            <EntryDetail key={EachEntry._id} entry={EachEntry}></EntryDetail>
          ))}
      </div>
    </div>
  );
};

export default Home;

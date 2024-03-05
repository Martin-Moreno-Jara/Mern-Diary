import { useEffect, useState } from "react";
import EntryDetail from "../components/EntryDetails";

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
      <h2>Welcome Home</h2>
      <div className="entries">
        {entry &&
          entry.map((EachEntry) => (
            <EntryDetail
              title={EachEntry.title}
              description={EachEntry.description}
              date={EachEntry.date}
            ></EntryDetail>
          ))}
      </div>
    </div>
  );
};

export default Home;

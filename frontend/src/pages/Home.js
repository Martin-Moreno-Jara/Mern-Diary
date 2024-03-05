import { useEffect, useState } from "react";

const Home = () => {
  const [entry, setEntry] = useState(null);
  const ar = [{ asd: "213" }, { asd: "2qe" }];

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
            <p key={EachEntry._id}>{EachEntry.title}</p>
          ))}
        {console.log(entry)}
      </div>
    </div>
  );
};

export default Home;

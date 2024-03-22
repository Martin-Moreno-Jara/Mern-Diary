import { useEffect } from "react";
import EntryDetail from "../components/EntryDetails";
import "../stylesheets/Home.css";
import EntryForm from "../components/EntryForm";
import { useEntryContext } from "../hooks/useEntryContext";
const devAPI = process.env.REACT_APP_DEVURL;
const productionAPI = process.env.REACT_APP_PROURL;

const Home = () => {
  const { entries, dispatch } = useEntryContext();

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch(`${devAPI}/api/entry`);
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_ENTRIES", payload: json });
      }
    };

    fetchEntries();
  }, [dispatch]);
  return (
    <div className="home">
      <div className="entries">
        {entries &&
          entries.map((EachEntry) => (
            <EntryDetail key={EachEntry._id} entry={EachEntry}></EntryDetail>
          ))}
      </div>
      <div className="form-div">
        <EntryForm></EntryForm>
      </div>
    </div>
  );
};

export default Home;

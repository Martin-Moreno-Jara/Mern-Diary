import { useEffect } from "react";
import EntryDetail from "../components/EntryDetails";
import "../stylesheets/Home.css";
import EntryForm from "../components/EntryForm";
import { useEntryContext } from "../hooks/useEntryContext";
import { useAuthContext } from "../hooks/useAuthContext";
const devAPI = process.env.REACT_APP_DEVURL;
const productionAPI = process.env.REACT_APP_PROURL;

const Home = () => {
  const { entries, dispatch } = useEntryContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch(`${productionAPI}/api/entry`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_ENTRIES", payload: json });
      }
    };

    if (user) {
      fetchEntries();
    }
  }, [dispatch, user]);
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

import { useState } from "react";
import { useEntryContext } from "../hooks/useEntryContext";
import { useAuthContext } from "../hooks/useAuthContext";
import "../stylesheets/EntryForm.css";
const devAPI = process.env.REACT_APP_DEVURL;
const productionAPI = process.env.REACT_APP_PROURL;

const EntryForm = () => {
  const { dispatch } = useEntryContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be Logged in");
      return;
    }

    const entry = { title, description };
    console.log(JSON.stringify(entry));

    const response = await fetch(`${devAPI}/api/entry`, {
      method: "POST",
      body: JSON.stringify(entry),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setDescription("");
      setEmptyFields([]);
      dispatch({ type: "CREATE_ENTRY", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new entry to your diary</h3>
      <label>Entry Title:</label>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      ></input>

      <label>Entry description: </label>
      <input
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
        className={emptyFields.includes("description") ? "error" : ""}
      ></input>

      <button>Add Entry</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default EntryForm;

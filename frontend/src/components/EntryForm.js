import { useState } from "react";
import { useEntryContext } from "../hooks/useEntryContext";
import "../stylesheets/EntryForm.css";

const EntryForm = () => {
  const { dispatch } = useEntryContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const entry = { title, description };
    console.log(JSON.stringify(entry));

    const response = await fetch("/api/entry", {
      method: "POST",
      body: JSON.stringify(entry),
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setDescription("");
      console.log("entry added", json);
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
      ></input>

      <label>Entry description: </label>
      <input
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></input>

      <button>Add Entry</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default EntryForm;
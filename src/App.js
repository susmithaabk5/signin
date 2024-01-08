import { useReducer } from "react";
import "./styles.css";
const initialstate = {
  name: "",
  email: "",
};
const reducer = (state, action) => {
  debugger;
  switch (action.type) {
    case "Update": {
      return { ...state, [action.key]: action.value };
    }
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.name}
          onChange={(e) => {
            dispatch({
              type: "Update",
              value: e.target.value,
              key: "name",
            });
          }}
        ></input>
        <input
          type="text"
          value={state.email}
          onChange={(e) => {
            dispatch({
              type: "Update",
              value: e.target.value,
              key: "email",
            });
          }}
        ></input>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

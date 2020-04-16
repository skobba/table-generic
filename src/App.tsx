import * as React from "react";
import "./styles.css";
import TableGen from "./components/table-gen";

const someJson = [
  {
    id: 1,
    firstName: "Sjøfarts",
    lastName: "Direktoratet"
  },
  {
    id: 2,
    firstName: "Cap",
    lastName: "Gemini"
  }
];

/* const tableGenProps: TableGenProps = {
  data: someJson
}; */

export default function App() {
  return (
    <div className="App">
      <h2>table-gen</h2>

      <TableGen data={someJson} />
    </div>
  );
}

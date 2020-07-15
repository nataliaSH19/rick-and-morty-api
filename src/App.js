import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table";
import "./App.css";

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "TV Show",
        columns: [
          {
            Header: "Name",
            accessor: "results.name",
          },
          {
            Header: "Status",
            accessor: "results.status",
          },
        ],
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Language",
            accessor: "results.gender",
          },

          {
            Header: "Status",
            accessor: "results.type",
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    (async () => {
      const result = await axios("https://rickandmortyapi.com/api/character/");
      setData(result.data);
    })();
  }, []);

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;

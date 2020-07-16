import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table";
import "./App.css";

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "Person",
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Image",
            Cell: (row) => (
              <div>
                <img height={100} src={"image"} />
              </div>
            ),
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Gender",
            accessor: "gender",
          },

          {
            Header: "Status",
            accessor: "status",
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
      setData(result.data.results);
    })();
  }, []);

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;

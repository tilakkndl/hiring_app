import React from "react";
import TableImplement from "../components/Table.component";
import GetData from "../components/GetData.component";

import { useEffect } from "react";

function Result() {
  const { error, isPending, data } = GetData("/api/v1/result");

  // console.log(error, isPending, data);
  return (
    <div>
      {isPending && <div>Loading</div>}
      {error && <div> {error}</div>}
      {data && <TableImplement data={data.data} />}
      {/* <TableImplement /> */}
    </div>
  );
}

export default Result;

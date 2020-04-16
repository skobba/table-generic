import * as React from "react";
// import SC from "./styled";
import HeaderGen from "../header-gen";

export interface TableGenProps {
  data: any;
}
export default (props => {
  console.log("data: " + JSON.stringify(props.data, null, 2));
  return (
    <table>
      <tbody>
        <HeaderGen />
        <tr>
          <td>Walter</td>
          <td>White</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Saul</td>
          <td>Goodman</td>
          <td>53</td>
        </tr>
      </tbody>
    </table>
  );
}) as React.SFC<TableGenProps>;

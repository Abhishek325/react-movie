import React from "react";
import classes from "./Table.module.css";

const Table = (props) => {
  return (
    <div className={`${classes["table-container"]} mt-2 table-responsive`}>
      <table className="table table-sm table-bordered">
        <caption>
          <button
            type="button"
            className="btn btn-sm btn-dark"
            onClick={props.onTableClose}
          >
            Close list
          </button>
        </caption>
        <thead className="thead-dark">
          <tr>
            {props.columns.map((col, index) => (
              <th scope="col" key={index}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((r, i) => (
            <tr key={i}>
              {Object.keys(r).map((k, j) => (
                <td key={j}>{r[k]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import React from "react";

function TablicaMjesta({ data }) {
  const tableRows = data.map(function (item, index) {
    return (
      <tr key={index}>
        <td>{item.Name}</td>
        <td>{item.Description}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Ime</th>
            <th>Opis</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default TablicaMjesta;

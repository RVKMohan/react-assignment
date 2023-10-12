import React from 'react';

// The Table component receives 'data' as a prop
const Table = ({ data }) => {
  return (
    // Create an HTML table with an id 'table_content'
    <table id="table_content">
      <thead>
        {/* Define table header row with column headers: ID, Year, Medals */}
        <tr>
          <th>ID</th>
          <th>Year</th>
          <th>Medals</th>
        </tr>
      </thead>
      <tbody>
        {/* Map through 'data' to generate table rows for each item in the data */}
        {data.map((item) => (
          <tr key={item.Id}>
            {/* Display item details in each table row */}
            <td>{item.Id}</td>
            <td>{item.Year}</td>
            <td>{item.Medals}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Export the 'Table' component as the default export
export default Table;

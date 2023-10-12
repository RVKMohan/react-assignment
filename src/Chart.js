import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// The Chart component receives 'data' as a prop
const Chart = ({ data }) => {
  return (
    // Create a Line Chart component using Recharts
    <LineChart width={600} height={400} data={data}>
      {/* Define the X-axis using 'Year' data */}
      <XAxis dataKey="Year" />
       {/* Define the Y-axis */}
      <YAxis />
       {/* Add a grid with dashed lines for better visualization */}
      <CartesianGrid strokeDasharray="3 3" />
      {/* Display tooltips on hover for data points */}
      <Tooltip />
      {/* Display a legend to identify the line on the chart */}
      <Legend />
       {/* Create a Line on the chart with 'Medals' data, connected nulls, and a colored stroke */}
      <Line type="monotone" dataKey="Medals" stroke="#8884d8" connectNulls={true} activeDot={{ r: 8 }} />
    </LineChart>
  );
};

// Export the 'Chart' component as the default export
export default Chart;

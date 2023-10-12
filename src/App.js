import React, { useState } from 'react'; // Import React and the 'useState' hook from the 'react' library
import Table from './Table'; // Import the Table.js file
import Chart from './Chart'; // Import the Chart.js file 
import DummyData from './dummyData.json'; // Import the dummyData.json file
import './App.css' ; // Import the CSS file

function App() {
   // Define a state variable to toggle between the table and chart
  const [showTable, setShowTable] = useState(true);

  return (
    <div className="App">
      {/* Header section with personal details */}
      <div className="header"> 
        <h1>Name: R V K Mohan</h1>
        <p>Email: rvkmohan07@gmail.com</p>
        <p>Contact:  +91 9390397853</p>
      </div>
      
      {/* Toggle buttons to switch between table and chart */}
      <div className="toggle">
        {/* Button to show the table */}
        <button id='btn1' onClick={() => setShowTable(true)}><h3>Show Table</h3></button>
        {/* Button to show the chart */}
        <button id='btn2' onClick={() => setShowTable(false)}><h3>Show Chart</h3></button>
      </div>
      
      {/* Container for either the table or chart based on the state */}
      <div className="container">
        {/* Conditional rendering based on the state: show table or chart */}
        {showTable ? <Table data={DummyData} className="table" /> : <Chart data={DummyData} className="chart" />}
      </div>
    </div>
  );
}

// Export the 'App' component as the default export
export default App;

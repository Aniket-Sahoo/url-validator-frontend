import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState, useEffect } from 'react';


const columnLabels = ["Task ID", "URL", "TimeStamp",  "Status"];

export default function BasicTable() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:8080/api/event');
    eventSource.onmessage = (event) => {
      console.log("entered onmessage");
      const data = JSON.parse(event.data);
      setData(data); // Update status based on SSE data
      setLoading(false);
      console.log("data", data);
    };

    // Clean up when the component unmounts
    return () => {
      eventSource.close();
    };
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columnLabels.map((label) => (
              <TableCell key={label}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow 
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row._id}</TableCell>
              <TableCell align="left">{row.imageUrl}</TableCell>
              <TableCell align="center">{row.status.toString()}</TableCell>
              <TableCell align="right">{row.dateSubmitted}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

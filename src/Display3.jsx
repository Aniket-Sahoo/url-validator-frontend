import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination  from '@mui/material/TablePagination';
import axios from 'axios';
import { useState, useEffect } from 'react';


const columnLabels = ["Task ID", "Status", "URL",  "TimeStamp"];

export default function BasicTable() {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:8080/api/event');
    const handleEvent = async (event) => {
      try {
        console.log("entered onmessage");
        const data = JSON.parse(event.data);
        setData(data); // Update status based on SSE data
        setLoading(false);
        console.log("data", data);
      } catch (err) {
        setError(`Error processing SSE data: ${err.message}`);
        setLoading(false);
      }
    };
    // Event listener for message
    eventSource.onmessage = handleEvent;
    // Error handling
    eventSource.onerror = (err) => {
      setError(`SSE connection error: ${err.message}`);
      setLoading(false);
      eventSource.close(); // Close connection on error
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const paginatedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: "70vh" }}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="scrollable table">
          <TableHead>
            <TableRow>
              {columnLabels.map((label) => (
                <TableCell
                 key={label}
                 sx={{backgroundColor: "#E5E4E2", color: "black"}}
                >
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow 
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row._id}</TableCell>
                <TableCell align="left">{row.status.toString()}</TableCell>
                <TableCell align="left">{row.imageUrl}</TableCell>
                <TableCell align="left">{row.dateSubmitted}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
          rowsPerPageOptions={[10, 25, 50]} // Limit to only 10 rows per page
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </Paper>
  );
}

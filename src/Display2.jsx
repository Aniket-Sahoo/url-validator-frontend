import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState, useEffect } from 'react';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

// const columns = [
//   { id: 'name', label: 'No.', minWidth: 170 },
//   { id: 'calories', label: 'task id', minWidth: 100 },
//   { id: 'fat', label: 'url', minWidth: 100 },
//   { id: 'carbs', label: 'status', minWidth: 100 },
//   { id: 'protein', label: 'timestamp', minWidth: 100 },
// ];

export default function BasicTable() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //         const result = await axios.get('/api/list-urls');
  //         console.log(result.data)
  //         setData(result.data)
  //     }
  //     fetchData();
  // }, []);


  useEffect(() => {
    // Replace 'your-api-endpoint' with your actual endpoint
    axios.get('/api/list-urls')
      .then((response) => {
        console.log(response.data);
        setData(response.data); // Set the data from the API
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch((err) => {
        setError(err.message); // Capture any error
        setLoading(false);
      });
    }, []); // Empty dependency array ensures the request runs once on component mount

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }
    // console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
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

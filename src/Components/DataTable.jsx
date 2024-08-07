import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function DataTable({formData = 0}) {
    return (
      <>
        <h1 className="mb-5 text-green">Data added sucessfully</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(formData).map((key) => (
                <TableRow key={key}>
                  <TableCell className="text-capitalize">{key}</TableCell>
                  <TableCell>{formData[key]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
  
export default DataTable;
  
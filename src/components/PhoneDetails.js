import React from 'react';
import styled from 'styled-components'

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
}))(TableRow);

const StyledTableContainer = styled(TableContainer)`
  margin: 0 auto;
  max-width: 600px;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
`

const renderRow = (detail, value) => {
    return <StyledTableRow key={detail}>
        <StyledTableCell component="th" scope="row">{detail}</StyledTableCell>
        <StyledTableCell align="right">{value}</StyledTableCell>
    </StyledTableRow>
}

const PhoneDetails = (props) => {
    return <Wrapper><StyledTableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Detail</StyledTableCell>
            <StyledTableCell align="right">Value</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderRow("Color", props.phone.color)}
          {renderRow("Description", props.phone.description)}
          {renderRow("Manufacturer", props.phone.manufacturer)}
          {renderRow("Price", `$${props.phone.price}`)}
          {renderRow("Processor", props.phone.processor)}
          {renderRow("RAM", `${props.phone.ram}GB`)}
          {renderRow("screen", props.phone.screen)}
        </TableBody>
      </Table>
    </StyledTableContainer>
  </Wrapper>
}

export default PhoneDetails
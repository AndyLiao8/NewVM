import * as React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const rows = [
  {id: 1, title: 'Title of artile 1'},
  {id: 2, title: 'Title of artile 2'},
  {id: 3, title: 'Title of artile 3'},
  {id: 4, title: 'Title of artile 4'},
  {id: 5, title: 'Title of artile 5'},
];

const tag = (props) => {
  return (
    <td className={clsx('MuiTableCell-root','MuiTableCell-body', 'MuiTableCell-alignLeft')}>
      <span>
        <span className="tag">Tag 1</span>
        <span className="tag">Tag 2</span>
      </span>
      <br />
      <Input />
      <Button variant="contained" color="primary" size="small" onClick={props.addTag}>
        Add Tag
      </Button>
    </td>
  )
}

const deleteArticle = (props) => {
  return (
    <td className={clsx('MuiTableCell-root','MuiTableCell-body', 'MuiTableCell-alignCenter')}>
      <Button variant="contained" color="secondary" size="small">
        Delete
      </Button>
    </td>
  )
}

export default (props) => {
  return (
    <div>
      <Button variant="contained" color="primary">
        New
      </Button>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Tag</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left" component={tag}>
                </TableCell>
                <TableCell align="center" component={deleteArticle}></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}
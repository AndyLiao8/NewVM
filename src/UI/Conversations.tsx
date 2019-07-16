import { List } from 'immutable';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import * as React from 'react';
import { Conversation } from 'src/state';

export interface ConversationProps {
    isLoading: boolean;
    isInitialized: boolean;
    data: List<Conversation>;
    onReloadData: (Event) => void;
    initializeData: () => void;
}

class Conversations extends React.PureComponent<ConversationProps> {
  static getDerivedStateFromProps(props: ConversationProps) {
    if(!props.isInitialized) {
      props.initializeData();
    }
    return null;
  }

  render() {
    return (
        <Paper>
            {this.props.isLoading && <div>Loading...</div>}
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">ID</TableCell>
                  <TableCell align="center">Subject</TableCell>
                  <TableCell align="center">Last Message</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.data.map(row => (
                  <TableRow key={row.id}>
                    <TableCell align="left">{row.id}</TableCell>
                    <TableCell align="center">{row.subject}</TableCell>
                    <TableCell align="center">{row.lastMessage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.props.onReloadData}
                >
                  Reload Conversation
                </Button>
            </div>
        </Paper>
    );
  }
}

export default Conversations;
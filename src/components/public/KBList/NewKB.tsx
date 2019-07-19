import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      width: '100%',
    },
  }),
);

export default (props) => {
  const classes = useStyles(props);
  const [title, setTitle] = React.useState();
  const [description, setDescription] = React.useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.newArticle(title, description);
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="title"
        name="title"
        label="Title"
        className={classes.input}
        autoComplete="title"
        margin="normal"
        variant="outlined"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        multiline={true}
        rows={10}
        id="description"
        name="description"
        label="Description"
        className={classes.input}
        autoComplete="description"
        margin="normal"
        variant="outlined"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type='submit' variant="contained" color="primary" className={classes.button}>
        Save
      </Button>
      <Button variant="contained" color="secondary" className={classes.button} onClick={props.cancelNew}>
        Cancel
      </Button>
    </form>
  )
}
import * as React from 'react';
import { Map } from 'immutable';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tag, { ITag } from './Tag';
import NewKB from './NewKB';


export interface IArticle {
  id: number;
  title: string;
  description: string;
  tags: ITag[];
}

export interface IKBListProps {
  articles: Map<number, IArticle>;
  onGetArticles: () => void;
  onAddNewArticle: (title: string, description: string) => void;
  onDeleteArticle: (id: number) => void;
  onAddTag: (articleId:number, name: string) => void;
  onRemoveTag: (articleId: number, id: number) => void;
}

let ifLoaded = false;
export default ({ articles = Map(), ...others }: IKBListProps) => {
  React.useEffect(() => {
    if (!ifLoaded) {
      ifLoaded = true;
      others.onGetArticles();
    }
  });

  const [ ifNew, setIfNew ] = React.useState(false);
  return (
    <Container>
      {
        ifNew ?
          <NewKB
            newArticle={
              (name: string, description: string) => {
                setIfNew(false);
                others.onAddNewArticle(name, description);
              }
            }
            cancelNew={() => {
              setIfNew(false);
            }} 
          />
          :
          <React.Fragment>
            <Button onClick={() => {
              setIfNew(!ifNew);
            }} variant="contained" color="primary">
              New
            </Button>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="left">Tag</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {articles.toList().map(article => (
                    <TableRow key={article.id}>
                      <TableCell component="th" scope="row">
                        {article.id}
                      </TableCell>
                      <TableCell align="left">{article.title}</TableCell>
                      <TableCell align="left">{article.description}</TableCell>
                      <TableCell align="left">
                        <Tag articleId={article.id} tags={article.tags} onAddTag={others.onAddTag} onRemoveTag={others.onRemoveTag} />
                      </TableCell>
                      <TableCell align="center">
                        <Button onClick={() => { others.onDeleteArticle(article.id); }} variant="contained" color="secondary" size="small">
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </React.Fragment>
      }
      
    </Container>
  )
}
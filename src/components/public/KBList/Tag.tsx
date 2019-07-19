import * as React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

export interface ITag {
    id: number;
    name: string;
}

export interface ITagProps {
    articleId: number;
    tags: ITag[];
    onAddTag: (articleId:number, name: string) => void;
    onRemoveTag: (articleId: number, id: number) => void;
}

export default ({ tags = [], ...others }: ITagProps) => {
    const [tagName, setTageName] = React.useState('');
    return (
        <React.Fragment>
            <span>
                {tags.map(t => (
                    <span onClick={() => { others.onRemoveTag(others.articleId, t.id); }} className="tag">{t && t.name}</span>
                ))}
            </span>
            <br />
            <Input value={tagName} onChange={(event) => {
                setTageName(event.target.value);
            }} />
            <Button variant="contained" color="primary" size="small" onClick={() => {
                others.onAddTag(others.articleId, tagName);
                setTageName('');
            }}>
                Add Tag
            </Button>
        </React.Fragment>
    );
}
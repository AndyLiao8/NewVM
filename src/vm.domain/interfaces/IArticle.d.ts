import ITag from './ITag';

export default interface IArticle {
   ifOperating?: boolean;
   id?: number;
   title?: string;
   description?: string; 
   tags?: ITag[],
}
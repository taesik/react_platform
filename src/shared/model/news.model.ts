import { IUser } from './user.model';

export interface INews {
  id : string,
  title : string,
  content : string,
  date : string,
  media : string,
  channel : string,
  url : string,
  entities : string[],
}

export interface RcmdKwdJsonType
{
  keywordList : string[];
}

export const defaultValue: Readonly<INews> = {
  id : '',
  title : '',
  content : '',
  date : '',
  media : '',
  channel : '',
  url : '',
  entities : []
}



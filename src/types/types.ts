import { RouteComponentProps } from 'react-router-dom';

export interface IBaseValidation {
  [key: string]: string;
}

export interface IFormProps extends RouteComponentProps {
  setUser: (state: { id: string; username: string }) => void;
  user: { id: string; username: string };
}

export interface IAuthUser {
  id: string;
  username: string;
}

export interface IUserProfileProps {
  userID: string;
  user: IAuthUser;
}

export type TComment = {
  senderName: string;
  content: string;
};

export interface INotFound {
  errorMessage: string;
}

export interface ILink {
  title: string;
  path: string;
  icon: JSX.Element;
}

export type Section = {
  title?: string;
  fields: {
    placeholder: string;
    name: string;
    dropdown?: string[];
  }[];
};

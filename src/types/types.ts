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
  senderID: string;
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
    type?: string;
    placeholder: string;
    name: string;
    defaultValue?: string;
    dropdown?: string[];
    twoColumns?: boolean;
    multiline?: number;
  }[];
};

export interface IUserProfileBase {
  username: string;
  country: string;
  city: string;
  firstName: string;
  lastName: string;
  description: string;
}

export interface IEventProps {
  eventID: string;
  userID: string;
}

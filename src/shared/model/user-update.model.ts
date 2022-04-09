export interface IUserUpdate {
  ID: string;
  USER_ID: string;
  INFO: string;
  TIME: Date | null;
}

export const defaultValue: Readonly<IUserUpdate> = {
  ID: '',
  USER_ID: '',
  INFO: '',
  TIME: null,
}

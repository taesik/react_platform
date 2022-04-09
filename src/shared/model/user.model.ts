export interface IUser {
  USER_ID: string;
  USER_NM: string;
  CREA_TIME: Date | null;
  ORGA_NM: string;
  PHON_NO: string;
  USER_PW: string;
  AUTH_LVL: number;
}

export const defaultValue: Readonly<IUser> = {
  USER_ID: '',
  USER_NM: '',
  CREA_TIME: null,
  ORGA_NM: '',
  PHON_NO: '',
  USER_PW: '',
  AUTH_LVL: 0
}

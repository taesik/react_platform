export interface ISettingHistory {
  EQIP_ID: string;
  SNSR_ID: string;
  SET_COMM_CD: string;
  SS_NM: string;
  EQIP_NM: string;
  SNSR_NM: string;
  SNSR_KIND: string;
  SET_NAME: string;
  SET_VALUE: string;
  USER_ID: string;
  LAST_UPDATE_TIME: Date | null;
}

export const defaultValue: Readonly<ISettingHistory> = {
  EQIP_ID: '',
  SNSR_ID: '',
  SET_COMM_CD: '',
  SS_NM: '',
  EQIP_NM: '',
  SNSR_NM: '',
  SNSR_KIND: '',
  SET_NAME: '',
  SET_VALUE: '',
  USER_ID: '',
  LAST_UPDATE_TIME: null,
}

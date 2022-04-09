/**
 * 메인단선도에서 사용하는 GIS 파이프 모델
 */
export interface IDiagramGisRow {
  ROW?: string;
  USE_YN?: string;
}

export const gisRowDefaultValue: Readonly<IDiagramGisRow> = {
  ROW: '',
  USE_YN: '',
}

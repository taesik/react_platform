/**
 * 메인단선도에서 사용하는 (GIS/MTR)장비 모델
 */
export interface IDiagramEquipment {
  ID?: string;
  USE_YN?: string;
  GIS_MTR?: string;
  GIS_MTR_NUM?: string;
  GIS_MTR_TITLE?: string;
}

export const diagramEquipmentDefaultValue: Readonly<IDiagramEquipment> = {
  ID: '',
  USE_YN: '',
  GIS_MTR: '',
  GIS_MTR_NUM: '',
  GIS_MTR_TITLE: '',
}

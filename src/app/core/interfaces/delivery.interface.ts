export interface Delivery {
  uuid: string;
  order: number;
  status: string;
  deliveryDate: string;
  logisticsDeliveryDate: string;
  deliveryTime: string;
  tripUuid: string;
  branch: Branch;
  unloadingType: UnloadingType;
  preTrips: number[];

}
export interface Branch {
  uuid: string;
  branchCode: string;
  branchName: string;
  telegramId: number;
}

export interface  UnloadingType {
  uuid: string;
  nameUnloadingType: string;
}

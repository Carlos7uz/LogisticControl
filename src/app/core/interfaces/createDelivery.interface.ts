export interface CreateDelivery {
  order?: number;
  branchUuid: string;
  tripUuid?: string;
  deliveryDate: string;
  logisticsDeliveryDate: string;
  deliveryTime: string;
  unloadingTypeUuid: string;
  status?: string
}

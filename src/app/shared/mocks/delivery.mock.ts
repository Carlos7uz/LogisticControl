import { Delivery } from "../../core/interfaces/delivery.interface";

export const DELIVERY_MOCK: {deliveries: Delivery[]} = {
  "deliveries": [
    {
      "uuid": "e45cca75-b5a9-4211-bac0-3a44c8c08455",
      "order": 0,
      "status": "PENDING",
      "deliveryDate": "2024-09-09",
      "logisticsDeliveryDate": "2024-09-09",
      "deliveryTime": "00:00:00",
      "tripUuid": "534b7fb6-76a4-4daa-9e6a-1e9ed598943c",
      "branch": {
          "uuid": "7aaa416e-2a33-4c2b-a4e6-00edf5f0ea6f",
          "branchCode": "0356",
          "branchName": "CHAMPAGNAT STH-R-P",
          "telegramId": 0
      },
      "unloadingType": {
          "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
          "nameUnloadingType": "Supply"
      },
      "preTrips": []
    },
    {
        "uuid": "c13b2f7b-0a19-4589-8cee-a356ec0e9bb5",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-09",
        "logisticsDeliveryDate": "2024-09-09",
        "deliveryTime": "02:00:00",
        "tripUuid": "534b7fb6-76a4-4daa-9e6a-1e9ed598943c",
        "branch": {
            "uuid": "95532d04-9e71-44a2-88e9-be2c7ee21d57",
            "branchCode": "0354",
            "branchName": "PALLADIUM CTBA STH-SH-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": [
            764324
        ]
    },
    {
        "uuid": "436fb19f-5d43-4ace-9b7e-9197197dbc31",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-09",
        "logisticsDeliveryDate": "2024-09-11",
        "deliveryTime": "03:00:00",
        "tripUuid": "534b7fb6-76a4-4daa-9e6a-1e9ed598943c",
        "branch": {
            "uuid": "5dbc72b3-964e-481e-8993-38f4a337c000",
            "branchCode": "H003",
            "branchName": "JERONIMO PALLADIUM PCA-SH-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": [
            726653,
            726653
        ]
    },
    {
        "uuid": "8446b381-9fb8-48da-9929-1dfdd2c2185a",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-22",
        "logisticsDeliveryDate": "2024-09-22",
        "deliveryTime": "02:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "7aaa416e-2a33-4c2b-a4e6-00edf5f0ea6f",
            "branchCode": "0356",
            "branchName": "CHAMPAGNAT STH-R-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "d2a4cb4c-1acc-48d1-9c3d-e23bde704e73",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-23",
        "logisticsDeliveryDate": "2024-09-23",
        "deliveryTime": "17:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": [
            875632
        ]
    },
    {
        "uuid": "67059b95-814a-49ca-92c2-bdafc4c8726b",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-23",
        "logisticsDeliveryDate": "2024-09-23",
        "deliveryTime": "21:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "24847255-98a6-4a82-9438-8335f12bdba2",
            "branchCode": "0264",
            "branchName": "FLORIANOPOLIS STH-SH-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "57a15560-3f2a-484c-a222-8995dca61647",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-24",
        "logisticsDeliveryDate": "2024-09-24",
        "deliveryTime": "08:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "90c1aba1-49ec-4569-841d-3e4bf51f45af",
            "branchCode": "0299",
            "branchName": "BALNEARIO CAMBORIU STH-R-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "69bf8627-61ce-456c-b08e-755bc5f035bd",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "6778e518-bb8d-402a-89a3-3ab09b62f0fd",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "398a3820-07b0-4249-bd88-6090e770fb46",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "59fa1df0-fc77-428e-9775-c0e2804a74fc",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "b7084b03-557d-46e4-8ca3-a655cbd92334",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "c484c5f0-212f-4391-beb3-c3b5d122a82e",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "2fcb7140-9101-4b92-b1ea-40bcd2d51891",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "330de412-58cb-45e3-87c8-ea5e40fb3b8b",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "862c5616-1111-480f-833e-d7589d180738",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "8992415f-cd77-4fcd-8867-de4c7010625a",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "f15f42d4-d737-4c99-a327-fa1935587ff3",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "94c7cfd2-2475-42b2-a300-cfa9850859c6",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "938b7362-0dff-41b6-8d67-e3f161a06e4d",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "adb60c50-dad2-4093-ad62-55ce33ade130",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "dd1e94ad-d55d-4928-a24b-2a628be3544e",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "59da5e66-184a-43dd-bc8b-724e316b4f12",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "6c7490d2-07d7-4ae2-a8d9-87937c059abb",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "8a82a048-4a42-4551-a0e9-252c9ba78350",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "fb1ee8dc-d75d-4d64-a22e-417981e74197",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "5d143277-1a89-4da0-a54f-9b2801f1e6f8",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "867cbdb9-3991-4370-8e6d-b38ad49b7b49",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "7a5761aa-1cbf-44fe-8c54-e3c64185d3e1",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "2172c636-ffd1-4bb8-a1f1-66423cafafd9",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "ef6bcb22-2cc1-4afb-91ac-db2f24b9327f",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-25",
        "logisticsDeliveryDate": "2024-09-25",
        "deliveryTime": "09:00:00",
        "tripUuid": "4a2fe113-83dc-43a3-9eba-1b212fa44cbb",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "20f3826d-9d87-4046-8119-0cccc293e061",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-29",
        "logisticsDeliveryDate": "2024-09-29",
        "deliveryTime": "17:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "2c13a1a5-363a-4aa0-92a1-3d7eab94103b",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-29",
        "logisticsDeliveryDate": "2024-09-29",
        "deliveryTime": "17:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "d7663e60-392a-4e25-ac7e-7f720e0c2f77",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-29",
        "logisticsDeliveryDate": "2024-09-29",
        "deliveryTime": "17:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "b647aa70-5f1b-4cd4-9e46-b243a946a4db",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-29",
        "logisticsDeliveryDate": "2024-09-29",
        "deliveryTime": "17:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "18339bc4-9def-44fc-ad68-2e39597bd1bf",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-29",
        "logisticsDeliveryDate": "2024-09-29",
        "deliveryTime": "17:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "c1f851d5-557f-45c2-96e8-4dd611d30679",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-29",
        "logisticsDeliveryDate": "2024-09-29",
        "deliveryTime": "17:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "b0328da4-b7a9-48d0-88b7-131994aa9633",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-29",
        "logisticsDeliveryDate": "2024-09-29",
        "deliveryTime": "17:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "f84b80dd-db2e-4341-9a77-2d1479a7424b",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-29",
        "logisticsDeliveryDate": "2024-09-29",
        "deliveryTime": "17:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "cf7ba9a0-631e-4933-9909-05768f0e63b1",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-29",
        "logisticsDeliveryDate": "2024-09-29",
        "deliveryTime": "17:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "d1b4b689-6804-476f-8708-8f1ddc0e12bf",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-29",
        "logisticsDeliveryDate": "2024-09-29",
        "deliveryTime": "17:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "9cfde7cf-ffc7-4b55-a0a6-3d3024651388",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-09-29",
        "logisticsDeliveryDate": "2024-09-29",
        "deliveryTime": "17:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "f55dbc7b-11c9-4b84-8499-fce1cbba1bf7",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-10-04",
        "logisticsDeliveryDate": "2024-10-04",
        "deliveryTime": "17:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "4444f148-aceb-4e7d-aa30-5130eb6593be",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-10-02",
        "logisticsDeliveryDate": "2024-10-02",
        "deliveryTime": "18:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "1ca40af1-3929-4e62-82f5-89b5be41fa5b",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-10-02",
        "logisticsDeliveryDate": "2024-10-02",
        "deliveryTime": "21:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "4a68267b-a311-482e-a8c5-f687f49b7ab2",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-10-04",
        "logisticsDeliveryDate": "2024-10-04",
        "deliveryTime": "15:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "7003fe58-4a5d-47d4-a720-3087d217156c",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-10-02",
        "logisticsDeliveryDate": "2024-10-02",
        "deliveryTime": "21:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "e5f0f5e0-af42-4b3e-87e7-4246791b4b16",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-10-09",
        "logisticsDeliveryDate": "2024-10-09",
        "deliveryTime": "11:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "4b251aea-4f08-466d-bb91-17cd2966fe72",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-10-10",
        "logisticsDeliveryDate": "2024-10-10",
        "deliveryTime": "15:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "b44b2594-6f9f-4bcc-9ac6-f8d2234493d4",
        "order": 0,
        "status": "PENDING",
        "deliveryDate": "2024-10-10",
        "logisticsDeliveryDate": "2024-10-10",
        "deliveryTime": "16:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    },
    {
        "uuid": "318cda88-2083-4c39-af81-7fb3a0568127",
        "order": 0,
        "status": "COMPLETED",
        "deliveryDate": "2024-09-09",
        "logisticsDeliveryDate": "2024-09-11",
        "deliveryTime": "03:00:00",
        "tripUuid": "927d6047-d1b6-4c60-949f-c09a43fa16fa",
        "branch": {
            "uuid": "13236cf7-dca3-4ea9-9fe6-8bbf562cfaf9",
            "branchCode": "0202",
            "branchName": "ALLESBLAU CTN-BR-P",
            "telegramId": 0
        },
        "unloadingType": {
            "uuid": "906cdd1c-87f6-4a9e-aeeb-5d679f07d468",
            "nameUnloadingType": "Supply"
        },
        "preTrips": []
    }
  ]
}

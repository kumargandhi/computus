import { RECEIPT_FORMAT } from 'src/app/commom/constants';

export interface RentReceiptsInterface {
    receiptFormat: RECEIPT_FORMAT.Monthly;
    fromDate: Date;
    toDate: Date;
    sumOf: number;
    from: string;
    propertyAddress: string;
    ownerName: string;
    ownerPAN: string;
    desc: string;
}

export interface ReceiptDateRangeInterface {
    fromDate: string;
    toDate: string;
}

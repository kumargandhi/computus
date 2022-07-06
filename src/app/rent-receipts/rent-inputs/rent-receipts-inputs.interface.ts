import { RECEIPT_FORMAT } from "src/app/commom/constants";

export class RentReceiptsInputsInterface {
    myName!: string;
    monthlyRent!: number;
    panNumber!: string;
    receiptFormat!: RECEIPT_FORMAT.Monthly;
    ownerName!: string;
    ownerPANNumber!: string;
    startDate!: Date;
    endDate!: Date;
    address!: string;
}

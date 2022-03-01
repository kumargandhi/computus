import { DEBT_FREE_PAYMENT_TYPE } from '../../commom/constants';

export class DebtFreeInputsInterface {
    balance!: number;
    interest!: number;
    paymentType!: DEBT_FREE_PAYMENT_TYPE;
    payment!: number;
}

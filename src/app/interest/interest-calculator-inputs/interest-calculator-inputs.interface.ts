import { COMPOUNDED_INTEREST_TYPE } from '../../commom/constants';

export class InterestCalculatorInputsInterface {
    principal!: number;
    year!: number;
    rate!: number;
    compoundedInterest!: COMPOUNDED_INTEREST_TYPE;
}

import { EMI_TENURE } from '../../commom/constants';

export class EMICalculatorInputsInterface {
    loanAmount!: number;
    interestRate!: number;
    tenure!: EMI_TENURE;
    tenureValue!: number;
}

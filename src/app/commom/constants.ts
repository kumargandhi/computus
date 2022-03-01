export const Header_Menu = [
    {
        label: 'Home',
        routerLink: ['home'],
    },
    {
        label: 'Mortgage',
        routerLink: ['mortgage'],
    },
    {
        label: 'EMI',
        routerLink: ['emi'],
    },
    {
        label: 'Interest',
        routerLink: ['interest'],
    },
    {
        label: 'CAGR',
        routerLink: ['cagr'],
    },
];

export const INTEGER_REGEXP = /^[0-9]*$/;
export const FLOATING_REGEXP = /^([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

export enum EMI_TENURE {
    Yearly = 'Yearly',
    Monthly = 'Monthly',
}

export enum COMPOUNDED_INTEREST_TYPE {
    Annually = 'Annually',
    Semi_Annually = 'Semi-Annually',
    Quarterly = 'Quarterly',
    Monthly = 'Monthly',
    Daily = 'Daily',
    Continuously = 'Continuously',
}

export enum DEBT_FREE_PAYMENT_TYPE {
    MIN_MONTHLY = 'Min. monthly payments',
    FIXED_MONTHLY = 'Fixed monthly payments',
}

export const Calculators_Menu = [
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
    {
        label: 'Debt Free',
        routerLink: ['debt-free'],
    },
];

export const Tools_Menu = [
    {
        label: 'Rent receipt generator',
        routerLink: ['rent-receipts'],
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

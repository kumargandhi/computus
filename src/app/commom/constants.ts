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
];

export const INTEGER_REGEXP = /^[0-9]*$/;
export const FLOATING_REGEXP = /^([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

export enum EMI_TENURE {
    Yearly = 'Yearly',
    Monthly = 'Monthly',
}

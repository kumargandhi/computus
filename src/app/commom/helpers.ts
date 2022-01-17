import * as _ from 'lodash';

/**
 * Format given number to two decimal values
 * @param n
 */
export function formatMoney(n: number) {
    return _.toNumber(n.toFixed(2));
}

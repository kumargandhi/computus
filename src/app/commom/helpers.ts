import * as _ from 'lodash';
import { CellConfig } from 'jspdf';

/**
 * Format given number to two decimal values
 * @param n
 */
export function formatMoney(n: number) {
    return _.toNumber(n.toFixed(2));
}

export function createHeadersForPdfTable(keys: string[]) {
    const result: CellConfig[] = [];
    for (let i = 0; i < keys.length; i += 1) {
        result.push({
            name: keys[i],
            prompt: keys[i],
            width: 55,
            align: 'center',
            padding: 10,
        });
    }
    return result;
}

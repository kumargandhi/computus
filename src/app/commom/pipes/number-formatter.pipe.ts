import { Pipe, PipeTransform } from '@angular/core';
import { formatMoney } from '../helpers';

@Pipe({
    name: 'nf',
})
export class NumberFormatterPipe implements PipeTransform {
    transform(value: number | undefined): string {
        if (value === 0) {
            return '0';
        }
        if (!value) {
            return '';
        }
        value = formatMoney(value);
        return value.toString(10).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
}

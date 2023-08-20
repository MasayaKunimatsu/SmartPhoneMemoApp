/* eslint-disable eol-last */
/* eslint-disable indent */
// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns';

export function dateToString(date) {
    if (!date) { return ''; }
    return format(date, 'yyyy/MM/dd HH:mm');
}
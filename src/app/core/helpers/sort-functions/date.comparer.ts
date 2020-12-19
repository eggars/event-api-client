import { Venue } from '@data/models';

// tslint:disable-next-line: typedef
export function compareDate(direction: string = 'asc') {
  const isAsc = direction === 'asc';
  return (a: Venue, b: Venue) => {
    if (a.date.valueOf() < b.date.valueOf()) {
      return isAsc ? -1 : 1;
    }
    if (a.date > b.date) {
      return isAsc ? 1 : -1;
    }
    return 0;
  };
}

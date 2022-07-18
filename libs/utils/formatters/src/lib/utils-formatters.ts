import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Toronto');

export function utilsFormatters(): string {
  return 'utils-formatters';
}

export const formatDate = (dateString: string) => {
  const hasZone = dateString.split('.').length > 1;
  const utcDateStr = `${dateString}${hasZone ? '' : '.000Z'}`;
  const day = dayjs(utcDateStr).tz('America/Toronto');
  return day.format('YYYY-MM-DD HH:mm');
};

import { formatDate, utilsFormatters } from './utils-formatters';

describe('utilsFormatters', () => {
  it('should work', () => {
    expect(utilsFormatters()).toEqual('utils-formatters');
  });
  describe('formatDate', () => {
    it('works', () => {
      const input = '2022-07-14T19:38:01';
      const actual = formatDate(input);
      expect(actual).toBe('2022-07-14 15:38');
    });
  });
});

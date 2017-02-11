import { classNameList } from '../src/utils';

describe('utils', () => {
  describe('classNameList', () => {
    it('should split the className', () => {
      expect(classNameList('a b c')).toEqual(['a', 'b', 'c']);
      expect(classNameList('a  b  c  ')).toEqual(['a', 'b', 'c']);
      expect(classNameList('')).toEqual([]);
    });
  });
});

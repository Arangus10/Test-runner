import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when input is text', () => {
    function ConvertPLNtoUSD(arg) {
      if (typeof arg === 'string') {
        return NaN;
      } else {      
    expect(convertPLNToUSD('7')).toBeNaN();
    expect(convertPLNToUSD('xyz')).toBeNaN();
    expect(convertPLNToUSD('-11')).toBeNaN();
  }}});
  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });
  it('should return error when input is neither a text nor a number', () => {
    expect(convertPLNToUSD(false)).toBe('Error');
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(function() {})).toBe('Error');
  });
  it('should return $0.00 when input is a number but it is less than zero', () => {
    expect(convertPLNToUSD(-10)).toBe('$0.00');
    expect(convertPLNToUSD(-10.5)).toBe('$0.00');
    expect(convertPLNToUSD(-0.500)).toBe('$0.00');
  });  
});

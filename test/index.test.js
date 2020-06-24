import defaultAwesomeFunction, { awesomeFunction } from '../src';

describe('Awesome test.', () => {
  test('default awesome function', () => {
    const expectedVal = 'I am the Default Awesome Function, fellow comrade! - Dinesh';
    expect(defaultAwesomeFunction('Dinesh')).toBe(expectedVal);
  });

  test('default awesome function', () => {
    const expectedVal = 'I am just an Awesome Function';
    expect(awesomeFunction()).toBe(expectedVal);
  });
});

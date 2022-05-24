const getOpeningHours = require('../src/getOpeningHours');

const completeResult = { Friday: { close: 8, open: 10 }, Monday: { close: 0, open: 0 }, Saturday: { close: 10, open: 8 }, Sunday: { close: 8, open: 8 }, Thursday: { close: 8, open: 10 }, Tuesday: { close: 6, open: 8 }, Wednesday: { close: 6, open: 8 } };
const open = 'The zoo is open';
const close = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('testing the types of returned values', () => {
    expect(typeof getOpeningHours).toBe('function');
    expect(typeof getOpeningHours()).toBe('object');
  });
  it('testing returned values', () => {
    expect(getOpeningHours()).toEqual(completeResult);
    expect(getOpeningHours('Tuesday', '08:00-AM')).toBe(open);
    expect(getOpeningHours('Tuesday', '05:00-PM')).toBe(open);
    expect(getOpeningHours('Tuesday', '07:00-AM')).toBe(close);
    expect(getOpeningHours('Tuesday', '07:00-PM')).toBe(close);
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(close);
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(close);
    expect(getOpeningHours('Thu', '09:00-PM')).toThrowError(new Error('The day must be valid. Example: Monday'));
    expect(getOpeningHours('Friday', '09:00-ZM')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
    expect(getOpeningHours('Friday', 'C9:00-AM')).toThrowError(new Error('The hour should represent a number'));
    expect(getOpeningHours('Friday', '09:c0-AM')).toThrowError(new Error('The minutes should represent a number'));
  });
});

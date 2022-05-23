const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testing the types of returned values', () => {
    expect(handlerElephants()).toBeUndefined();
    expect(typeof handlerElephants).toBe('function');
    expect(typeof handlerElephants(0)).toBe('string');
    expect(typeof handlerElephants('')).toBe('object');
    expect(handlerElephants([1, 2, 3])).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('testing returned values', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names').some((item) => item === 'Jefferson')).toBeTruthy();
    expect(handlerElephants('names').some((item) => item === 'banana')).toBeFalsy();
    expect(Math.floor(handlerElephants('averageAge'))).toBe(Math.floor(10.5));
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});

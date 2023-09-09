const {isBinary, getBinValue, convertBinToDec} = require('./index.js');

test('A função isBinary deve retornar que a string 1011 corresponde a um número binário.', () => { expect(isBinary('1011')).toBe(true) });
test('A função isBinary deve retornar que a string 1204 NÃO corresponde a um número binário.', () => { expect(isBinary('1204')).toBe(false) });
test('A função isBinary deve retornar que a string abcde NÃO corresponde a um número binário.', () => { expect(isBinary('abcde')).toBe(false) });

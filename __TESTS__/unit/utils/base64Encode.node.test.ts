/**
 * @jest-environment node
 */
import {base64Encode} from "../../../src/MediaEditing/internal/utils/base64Encode";

describe('base64 test encoding', () => {
  it('Encodes foo', () => {
    expect(base64Encode('foo')).toBe('Zm9v');
  });

  it('Encodes ABlasjglkaskfjgkj', () => {
    expect(base64Encode('ABlasjglkaskfjgkj')).toBe('QUJsYXNqZ2xrYXNrZmpna2o=');
  });


  it('Encodes https://www.example.com', () => {
    expect(base64Encode('https://www.example.com')).toBe('aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20=');
  });
});

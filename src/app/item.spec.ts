import { Item } from './item';

describe('Item', () => {
  it('should create an instance', () => {
    expect(new Item(1, "Cepillo dental", "Colgate", 50)).toBeTruthy();
  });
});

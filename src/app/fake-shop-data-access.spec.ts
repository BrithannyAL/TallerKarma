import { FakeShopDataAccess } from './fake-shop-data-access';

describe('FakeShopDataAccess', () => {
  it('should create an instance', () => {
    expect(new FakeShopDataAccess()).toBeTruthy();
  });
});

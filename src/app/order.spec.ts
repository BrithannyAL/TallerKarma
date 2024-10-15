import { DummyShopDataAccess } from './dummy-shop-data-access';
import { FakeShopDataAccess } from './fake-shop-data-access';
import { IShopDataAccess } from './ishop-data-access';
import { Item } from './item';
import { Order } from './order';
import { SpyShopDataAccess } from './spy-shop-data-access';
import { mock, when, instance,verify } from 'ts-mockito';

describe('Order test', function () {
    describe('Dummy', function () {

        it('Create order', function () {
          var dataAccess = new DummyShopDataAccess();
          var o = new Order(123, dataAccess);
          o.setLines(1234, 2, o);
          o.setLines(4321, 3, o);
          expect(o.getLines().length).toBe(2);
        });

        it('Calculate order', function () {
          var dataAccess = new FakeShopDataAccess();
          dataAccess.agregarItem(new Item(1234, 'Pasta dental', 'Colgate', 45));
          dataAccess.agregarItem(new Item(4321, 'Cepillo dental', 'Colgate', 15));
          var o = new Order(123, dataAccess);
          o.setLines(1234, 3, o);
          o.setLines(4321, 2, o);
          expect(o.getLines()[0].getSubTotal()).toBe(135);
        });

        it('Save order', function () {
          var dataAccess = new SpyShopDataAccess();
          var o = new Order(123, dataAccess);
          o.setLines(1234, 1, o);
          o.setLines(4321, 3, o);
          o.save();
          expect(dataAccess.wasSaveInvoke()).toBe(true);
        });

        it('Save order Mock', function () {
          let mockedDataAccess = mock<IShopDataAccess>();
          let dataAccess = instance(mockedDataAccess);
          var o = new Order(123, dataAccess);
          o.setLines(1234, 1, o);
          o.setLines(4321, 3, o);
          o.save();
          verify(mockedDataAccess.save(123, o)).once();
        });

        it('Calculate order Mock', function () {
          let mockedDataAccess = mock<IShopDataAccess>();
          let dataAccess = instance(mockedDataAccess);
          when(mockedDataAccess.getProductPrice(1234)).thenReturn(45.0);
          var o = new Order(123, dataAccess);
          o.setLines(1234, 3, o);
          o.setLines(4321, 2, o);
          expect(o.getLines()[0].getSubTotal()).toBe(135);
        });
    });
});

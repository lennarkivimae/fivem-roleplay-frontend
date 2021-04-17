import gearConfig from '../../components/gear/gear.config';
import inventoryItemsConfig from '../../components/inventory-items/inventory-items.config';

const inventoryConfig = {
  meta: undefined,
  context: {
    data: {
      gear: gearConfig.context.data,
      items: inventoryItemsConfig.context.data
    }
  }
};

export default inventoryConfig;

import equippedConfig from '../../components/equipped/equipped.config';

const inventoryConfig = {
  meta: undefined,
  context: {
    data: {
      gear: {
        weapons: [
          {
            name: 'smg',
            image: 'smg',
            type: 'primary',
            active: true
          },
          {
            name: 'smg',
            image: 'smg',
            type: 'primary',
          }
        ],
        utility: [
          {
            image: 'grenade',
            type: 'utility'
          },
          {
            image: 'grenade',
            type: 'utility'
          },
          {
            image: 'grenade',
            type: 'utility'
          }
        ]
      },
      equipped: equippedConfig.context.data
    }
  }
};

export default inventoryConfig;

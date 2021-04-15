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
      gear2: {
        weapons: [
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
        ]
      }
    }
  }
};

export default inventoryConfig;

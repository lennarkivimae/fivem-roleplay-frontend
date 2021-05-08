const gearConfig = {
  meta: undefined,
  context: {
    data: {
      weapons: [
        {
          name: 'smg',
          image: 'smg',
          type: 'primary',
          itemId: 'smg-1',
          active: true
        },
        {
          name: 'carbine-rifle',
          image: 'carbinerifle',
          type: 'primary',
          itemId: 'carbine-1',
          active: true
        },
        {
          name: 'pistol',
          image: 'pistol',
          type: 'secondary',
          itemId: 'pistol-1',
          active: true,
        }
      ],
      utility: [
        {
          image: 'grenade',
          type: 'utility',
          itemId: 'granade-1',
          amount: 4,
          active: true,
        },
        {
          image: 'grenade',
          type: 'utility',
          itemId: 'granade-2',
          amount: 5
        },
        {
          image: 'grenade',
          type: 'utility',
          itemId: 'granade-3',
          amount: 6
        }
      ]
    }
  }
};

export default gearConfig;

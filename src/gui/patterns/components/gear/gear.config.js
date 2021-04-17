const gearConfig = {
  meta: undefined,
  context: {
    data: {
      weapons: [
        {
          name: 'smg',
          image: 'smg',
          type: 'primary',
          active: true
        },
        {
          name: 'carbine-rifle',
          image: 'carbine-rifle',
          type: 'primary',
          active: true
        },
        {
          name: 'pistol',
          image: 'pistol',
          type: 'secondary',
          active: true,
        }
      ],
      utility: [
        {
          image: 'grenade',
          type: 'utility',
          active: true,
          amount: 4
        },
        {
          image: 'grenade',
          type: 'utility',
          amount: 4
        },
        {
          image: 'grenade',
          type: 'utility',
          amount: 4
        }
      ]
    }
  }
};

export default gearConfig;

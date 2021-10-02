export const player = ({ player, enemy }) => ({

  attackSword:{
      text: 'The player whirls his sword through the air and strikes.',
      resutl: {
          miss: ['dodge right', 'dodge left', 'duck'],
          critical: 'big'],
          hit: 'big']
      },
      damageFrom: 20,
      damageTo: 50
  },
  attackBareHands:{
        text: 'red',
        resutl: {
            miss: 'big',
            critical: true,
            hit: 5
        },
        damageFrom: 20,
        damageTo: 50
  },
  attackFoot:{
        text: 'red',
        resutl: {
            miss: 'big',
            critical: true,
            hit: 5
        },
        damageFrom: 20,
        damageTo: 50
  },
  attackGun:{
        text: 'red',
        resutl: {
            miss: 'big',
            critical: true,
            hit: 5
        },
        damageFrom: 20,
        damageTo: 50
  },
  attackJumpKick:{
        text: 'red',
        resutl: {
            miss: 'big',
            critical: true,
            hit: 5
        },
        damageFrom: 20,
        damageTo: 50
  },
  attackSmashBareHands:{
        text: 'red',
        resutl: {
            miss: 'big',
            critical: true,
            hit: 5
        },
        damageFrom: 20,
        damageTo: 50
  },
  attackStompEarthQuacke:{
        text: 'red',
        resutl: {
            miss: 'big',
            critical: true,
            hit: 5
        },
        damageFrom: 20,
        damageTo: 50
  },
  attackScratch:{
        text: 'The ${state.pName}',
        resutl: {
            miss: 'big',
            critical: true,
            hit: 5
        },
        damageFrom: 20,
        damageTo: 50
  },



  })

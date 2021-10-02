export const player = ({ player, enemy }) => ({
    attackSword: {
        text: '${player} whirls his sword through the air and strikes.',
        result: {
            miss: ['dodgeRight', 'dodgeLeft', 'duck'],
            critical: ['big'],
            hit: ['big']
        },
        damageFrom: 20,
        damageTo: 50,
        short: ""
    },
    attackBareHands: {
        text: 'red',
        result: {
            miss: 'big',
            critical: true,
            hit: 5
        },
        damageFrom: 20,
        damageTo: 50,
        short: ""
    },
    attackFoot: {
        text: 'red',
        result: {
            miss: 'big',
            critical: true,
            hit: 5
        },
        damageFrom: 20,
        damageTo: 50,
        short: ""
    },
    attackGun: {
        text: 'red',
        result: {
            miss: 'big',
            critical: true,
            hit: 5
        },
        damageFrom: 20,
        damageTo: 50,
        short: ""
    },
    attackJumpKick: {
        text: 'red',
        result: {
            miss: 'big',
            critical: true,
            hit: 5
        },
        damageFrom: 20,
        damageTo: 50,
        short: ""
    },
    attackSmashBareHands: {
        text: 'red',
        result: {
            miss: 'big',
            critical: true,
            hit: 5
        },
        damageFrom: 20,
        damageTo: 50,
        short: ""
    },
    attackStompEarthQuacke: {
        text: 'red',
        result: {
            miss: 'big',
            critical: true,
            hit: 5
        },
        damageFrom: 20,
        damageTo: 50,
        short: ""
    },
    attackScratch: {
        text: 'The ${state.pName}',
        result: {
            miss: 'big',
            critical: true,
            hit: 5
        },
        damageFrom: 20,
        damageTo: 50,
        short: ""
    },
})

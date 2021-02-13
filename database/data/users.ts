const users: Record<TUserId, TUser> = {
    '123j12j3': {
        names: 'Elías De Vargas',
        id: '123j12j3',
        votes: [
            {
                peopleId: '2zd33b8c',
                thumbUp: 1,
                thumbDown: 0,
            },
            {
                peopleId: '23h123h',
                thumbUp: 0,
                thumbDown: 1,
            }
        ],
        username: 'edevargas',
        password: '111111',
        email: 'sailedvc@gmail.com'
    },
    'h234h234h': {
        names: 'Eduardo Lara',
        id: 'h234h234hv',
        votes: [
            {
                peopleId: '2zd33b8c',
                thumbUp: 1,
                thumbDown: 0,
            },
            {
                peopleId: '23h123h',
                thumbUp: 1,
                thumbDown: 0,
            }
        ],
        username: 'eduardo.lara',
        password: '111111',
        email: 'eduardo.lara@edulara.com'
    }

}

export default users

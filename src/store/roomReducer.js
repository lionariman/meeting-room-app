// import room from './room.json'

const roomReducer = (state, action) => {
    switch (action.type) {
        case 'GET_MEETING_ROOM_NUMBER':
            return {
                ...state[action.id],
            }
        default:
            return null;
    }
}

export default roomReducer;
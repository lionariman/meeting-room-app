// import floor from './floor.json'

const floorReducer = (state, action) => {
    switch (action.type) {
        case 'GET_MEETING_ROOM_FLOOR':
            return {
                ...state[action.id],
            }
        default:
            return null;
    }
}

export default floorReducer;
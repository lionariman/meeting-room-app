// import builds from './Builds.json'

const buildsReducer = (state, action) => {
    switch (action.type) {
        case 'GET_MEETING_ROOM_ADDRESS':
            return {
                ...state[action.id],
            }
        default:
            return null;
    }
}

export default buildsReducer;
export default function dataItems (state = {},action)
{
    switch(action.type){
        case 'ADD_DATA':
            return{
                ...state,
                 ...action.data
            }
        default:
            return state
    }
}

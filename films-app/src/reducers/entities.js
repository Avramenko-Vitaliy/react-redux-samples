import { fromJS, Map } from 'immutable';

const initialState = fromJS({
    film: {},
    genre: {},
});

function fillEntities(state, actionEntities) {
    return Object.keys(actionEntities)
        .reduce((newState, key) => (
            Object.keys(actionEntities[key])
                .reduce((result, id) => (
                    result.updateIn([key, id], (value = Map()) => value.merge(fromJS(actionEntities[key][id])))
                ), newState)
        ), state);
}

export default function entitiesReducer(state = initialState, action) {
    const entities = Object.keys(action)
        .filter(key => action[key] && !!action[key].normalizedData)
        .map(key => action[key].normalizedData.entities)
        .find(item => item);
    if (entities) {
        return fillEntities(state, entities);
    }
    return state;
}

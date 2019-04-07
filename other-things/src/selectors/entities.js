import { List } from 'immutable';

export const getEntities = state => state.get('entities');

export const findEntitiesByIds = (entityName, ids, state) => {
    if (!ids) {
        return List();
    }
    return ids.map(id => state.getIn(['entities', entityName, id]));
};

export const findEntityById = (entityName, id, state) => state.getIn(['entities', entityName, id]);

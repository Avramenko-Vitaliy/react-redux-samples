import { createSelector, defaultMemoize } from 'reselect';
import { denormalize } from 'normalizr';

import schemas from '../data/schemas';

import { getEntities } from './entities';

export const readTotalPages = state => state.getIn(['films', 'totalPages']);

export const readPage = state => state.getIn(['films', 'page']);

export const hasMore = createSelector(
    readTotalPages,
    readPage,
    (total, page) => page < total,
);

export const readFilm = createSelector(
    getEntities,
    entities => defaultMemoize(id => denormalize(id, schemas.FILM, entities)),
);

export const readFilms = createSelector(
    getEntities,
    state => state.getIn(['films', 'ids']),
    (entities, ids) => denormalize(ids, schemas.FILMS, entities),
);

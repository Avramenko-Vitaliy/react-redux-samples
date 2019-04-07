import { createSelector, defaultMemoize } from 'reselect';
import * as Immutable from 'immutable';
import { denormalize } from 'normalizr';

import schemas from '../data/schemas';

import { getEntities } from './entities';

export const getFilm = createSelector(
    getEntities,
    entities => defaultMemoize(id => denormalize(id, schemas.FILMS, entities), Immutable.is),
);

export const getFilms = createSelector(
    getEntities,
    entities => defaultMemoize(id => denormalize(id, schemas.FILMS, entities), Immutable.is),
);
import { schema } from 'normalizr';

const genreSchema = new schema.Entity('genre');

const filmSchema = new schema.Entity('film',
    { genres: [genreSchema] },
    {
        processStrategy: entity => {
            entity.genres = [...entity.genre_ids];
            delete entity.genre_ids;
            return entity;
        },
    });

export default {
    FILM: filmSchema,
    FILMS: [filmSchema],
    GENRES: { genres: [genreSchema] },
};

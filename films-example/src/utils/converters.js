import { normalize } from 'normalizr';

export const normalizePagingResponse = schema => (response) => {
    const res = { ...response };
    res.normalizedData = normalize(res.data.results, schema);
    return res;
};

export const normalizeEntityResponse = schema => (response) => {
    const res = { ...response };
    res.normalizedData = normalize(res.data, schema);
    return res;
};

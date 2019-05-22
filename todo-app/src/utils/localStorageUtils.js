export const isDev = process.env.NODE_ENV === 'development';

export function saveData(name, data) {
    try {
        localStorage.setItem(name, isDev ? JSON.stringify(data) : btoa(encodeURIComponent(JSON.stringify(data))));
    } catch (err) {
        console.error(err);
    }
}

export function extractData(name) {
    try {
        const item = localStorage.getItem(name);
        if (!item) {
            return item;
        }
        return isDev ? JSON.parse(item) : item && JSON.parse(decodeURIComponent(atob(item)));
    } catch (err) {
        console.error(err);
    }
    return null;
}

export function clearData(name) {
    try {
        localStorage.setItem(name, '');
    } catch (err) {
        console.error(err);
    }
}

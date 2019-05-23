export const ALL_ACTIONS = 'ALL_ACTIONS';
export const FIRST_ACTION = 'FIRST_ACTION';
export const SECOND_ACTION = 'SECOND_ACTION';
export const THIRD_ACTION = 'THIRD_ACTION';
export const RESET_STATE = 'RESET_STATE';
export const DETACHED_TASK = 'DETACHED_TASK';
export const DELETE_BTN = 'DELETE_BTN';
export const CANCEL_DELETE_BTN = 'CANCEL_DELETE_BTN';

export const firstAction = () => ({
    type: FIRST_ACTION,
});

export const secondAction = () => ({
    type: SECOND_ACTION,
});

export const thirdAction = () => ({
    type: THIRD_ACTION,
});

export const reset = () => ({
    type: RESET_STATE,
});

export const detachedTask = () => ({
    type: DETACHED_TASK,
});

export const deleteBtn = () => ({
    type: DELETE_BTN,
});

export const cancelDeleteBtn = () => ({
    type: CANCEL_DELETE_BTN,
});

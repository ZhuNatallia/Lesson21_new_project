const defaultState = [];
const CATEGORIES_LOAD = 'CATEGORIES_LOAD';

export const categoriesLoadAction = (payload) => ({
	type: CATEGORIES_LOAD,
	payload,
});

export const categoriesReduser = (state = defaultState, action) => {
	if (action.type === CATEGORIES_LOAD) {
		return action.payload;
	}
	return state;
};

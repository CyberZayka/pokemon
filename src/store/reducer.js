import types from "./types";

const initialState = {
    allCards: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SAVE_ALL_CARDS: {
            return {
                allCards: action.payload
            };
        }
    }
    return state;
};

export default reducer;
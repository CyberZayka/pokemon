import types from "./types";

const saveAllCards = cards => ({
    type: types.SAVE_ALL_CARDS,
    payload: cards
});

export default saveAllCards;
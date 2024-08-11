import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    numOfCoins: number,
}

const getInitialState = (): number => {
    const savedCoins = localStorage.getItem('numOfCoins');
    return savedCoins ? parseInt(savedCoins, 10) : 0;
};

const initialState: InitialState = {
    numOfCoins: getInitialState(),
}

const coinSlice = createSlice({
    name: 'coin',
    initialState,
    reducers: {
        clicked: (state, action: PayloadAction<number>) => {
            state.numOfCoins += action.payload
            localStorage.setItem('numOfCoins', state.numOfCoins.toString())
        },

        bought: (state, action: PayloadAction<number>) => {
            state.numOfCoins -= action.payload
            localStorage.setItem('numOfCoins', state.numOfCoins.toString())
        },
    }
})

export default coinSlice.reducer
export const { clicked, bought } = coinSlice.actions
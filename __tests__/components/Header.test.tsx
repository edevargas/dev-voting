import React from 'react'
import Header from '@components/layouts/Header'
import {render, screen} from "@testing-library/react";
import {StoreContext} from "@context/storeContext";

const fakeLoguedInState: TState = {
    session: {
        isAuth: true,
        user: null,
        loading: false,
        error: null
    },
    people: {
        people: [],
        selectedPerson: null,
        loading: false,
        error: null
    }
}
const fakeLoguedInStore: TStore = {
    state: fakeLoguedInState,
    dispatch: (a) => {
    }
}
describe('<Header />', () => {
    test('Header component render', () => {
        render(<Header/>)
        screen.debug();
    })
    test('Header search for Sign In button', () => {
        render(<Header/>)
        expect(screen.queryByText(/Sign In/)).toBeInTheDocument();
    })
    test('Header search Sign Out button', () => {
        render(
            <StoreContext.Provider value={fakeLoguedInStore}>
                <Header/>
            </StoreContext.Provider>)
        expect(screen.queryByText(/Sign out/)).toBeInTheDocument();
    })

})

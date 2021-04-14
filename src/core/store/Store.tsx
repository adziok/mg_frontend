import React, { createContext, useReducer } from 'react';

type State = {
	user?: {
		name: string;
		id: string;
	};
};

type StateActions = {
	type: 'login' | 'logOut' | 'createNewRoom';
	payload: any;
};

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer((state: State, action: StateActions) => {
		switch (action.type) {
			case 'createNewRoom':
				const newState = {}; // do something with the action
				return newState;
			default:
				throw new Error();
		}
	}, initialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };

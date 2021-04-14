import React, { createContext, useState } from 'react';

export const CreateGameContext: any = createContext({});

export const CreateGameProvider = (props: any) => {
	const [isBeingCreated, setIsBeingCreated] = useState(false);
	return (
		<CreateGameContext.Provider value={{ isBeingCreated, setIsBeingCreated }}>
			{props.children}
		</CreateGameContext.Provider>
	);
};

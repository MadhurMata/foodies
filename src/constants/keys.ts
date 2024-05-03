type ArrowKeyValues = 'up' | 'down' | 'left' | 'right';

type KeyValues = 'escape' | 'enter' | 'numpadEnter' | 'space' | 'backspace';

type ArrowKey = {
	[key in ArrowKeyValues]: `Arrow${Capitalize<key>}`;
};

type Key = {
	[key in KeyValues]: Capitalize<key>;
};

const KEYS: ArrowKey & Key = {
	up: 'ArrowUp',
	down: 'ArrowDown',
	left: 'ArrowLeft',
	right: 'ArrowRight',
	escape: 'Escape',
	enter: 'Enter',
	numpadEnter: 'NumpadEnter',
	space: 'Space',
	backspace: 'Backspace'
};

export default KEYS;

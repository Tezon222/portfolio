import { useCallback, useRef } from 'react';
import { useCallbackRef } from './useCallbackRef';

const useThrottleByFrame = (callbackFn) => {
	const savedCallback = useCallbackRef(callbackFn);

	const throttleFrameId = useRef(null);

	// prettier-ignore
	const throttledCallback = useCallback((...values) => {
		if (throttleFrameId.current !== null) return;

		throttleFrameId.current = requestAnimationFrame(() => {
			savedCallback(...values);
			throttleFrameId.current = null;
		});

	}, [savedCallback]);

	return throttledCallback;
};

export { useThrottleByFrame };

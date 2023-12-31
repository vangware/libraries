import { splitExpression } from "../utils/splitExpression.js";

/**
 * Parses given expression or undefined if invalid.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringUnixExpression("1 1 1 1 1"); // ["1", "1", "1", "1", "1"]
 * parseStringUnixExpression(" 1   1    1    1   1 "); // ["1", "1", "1", "1", "1"]
 * parseStringUnixExpression("1 1 1 1 1 1"); // undefined
 * parseStringUnixExpression("1 1 1 1"); // undefined
 * ```
 * @param source string to be parsed.
 * @returns An array of 5 elements or `undefined` if invalid.
 */
export const parseStringUnixExpression = (source: string) => {
	const parsed = splitExpression(source);

	return parsed.length === 5
		? (parsed as unknown as readonly [
				minutes: string,
				hours: string,
				dayOfMonth: string,
				month: string,
				dayOfWeek: string,
		  ])
		: undefined;
};

import type { ReadOnlyArray } from "@vangware/types";

// eslint-disable-next-line @typescript-eslint/require-await
export const asyncIterateArray = async function* <Item>(
	array: ReadOnlyArray<Item>,
) {
	yield* array;
};

export const iterateArray = function* <Item>(array: ReadOnlyArray<Item>) {
	yield* array;
};

export const infiniteIterable = function* <Item>(item: Item) {
	// eslint-disable-next-line functional/no-loop-statements, @typescript-eslint/no-unnecessary-condition
	while (true) {
		yield item;
	}
};

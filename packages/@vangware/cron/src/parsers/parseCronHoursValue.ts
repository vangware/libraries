import type { CronHoursValue } from "../types/CronHoursValue.js";
import type { CronValueParser } from "../types/CronValueParser.js";
import { isCronHoursValue } from "../validations/isCronHoursValue.js";

/**
 * Parses `CronHoursValue` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronHoursValue(10); // "10"
 * parseCronHoursValue(23); // "23"
 * parseCronHoursValue(99); // undefined
 * ```
 * @param source `CronHoursValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronHoursValue: CronValueParser<CronHoursValue> = source =>
	isCronHoursValue(source) ? `${source}` : undefined;

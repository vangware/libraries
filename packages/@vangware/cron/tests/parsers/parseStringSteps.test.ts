import type { Tests } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { parseStringSecondsValue } from "../../src/parsers/parseStringSecondsValue.js";
import { parseStringSteps } from "../../src/parsers/parseStringSteps.js";

const parseSecondsSteps = parseStringSteps([0, 59])(parseStringSecondsValue);

export default [
	{
		given: "a valid steps value",
		must: "return CronSteps object",
		received: () => parseSecondsSteps("13/10"),
		wanted: () => ({ every: 10, start: 13 }),
	},
	{
		given: "a valid steps value including a range",
		must: "return CronSteps object",
		received: () => parseSecondsSteps("13-10/10"),
		wanted: () => ({ every: 10, start: { from: 13, to: 10 } }),
	},
	{
		given: "a valid steps value including an *",
		must: "return CronSteps object",
		received: () => parseSecondsSteps("*/10"),
		wanted: () => ({ every: 10, start: CRON_EVERY }),
	},
	{
		given: "an invalid steps value",
		must: "return undefined",
		received: () => parseSecondsSteps("13"),
		wanted: () => undefined,
	},
] as Tests;

import { describe, expect, test } from "vitest";
import { openai } from "@ai-sdk/openai";
import { generationOptionsSchema } from "../src/shared/schema";

describe("generationOptionsSchema model support", () => {
    test("accepts a gateway model string", () => {
        const result = generationOptionsSchema.safeParse({
            model: "openai/gpt-5",
            content: "Electricity"
        });

        expect(result.success).toBe(true);
    });

    test("accepts a LanguageModel object", () => {
        const result = generationOptionsSchema.safeParse({
            model: openai("gpt-5"),
            content: "Electricity"
        });

        expect(result.success).toBe(true);
    });

    test("rejects an empty model string", () => {
        const result = generationOptionsSchema.safeParse({
            model: "",
            content: "Electricity"
        });

        expect(result.success).toBe(false);
    });

    test("rejects an invalid model value", () => {
        const result = generationOptionsSchema.safeParse({
            model: 42,
            content: "Electricity"
        });

        expect(result.success).toBe(false);
    });
});
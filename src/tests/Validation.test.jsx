import { describe, test, expect } from "vitest";

describe("validation", () => {

  test("email validation", () => {

    expect(
      "abc@gmail.com".includes("@")
    ).toBe(true);

  });

});
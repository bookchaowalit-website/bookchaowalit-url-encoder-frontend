import { describe, expect, it } from "vitest";
import { convert, inverse, MODES } from "./codec";

describe("convert", () => {
  it("encodes components and full URIs differently", () => {
    expect(convert("component-encode", "a b&c=é")).toEqual({ ok: true, value: "a%20b%26c%3D%C3%A9" });
    expect(convert("uri-encode", "https://x.test/a b?q=é&r=1")).toEqual({ ok: true, value: "https://x.test/a%20b?q=%C3%A9&r=1" });
  });

  it("decodes, optionally treating + as a space", () => {
    expect(convert("component-decode", "caf%C3%A9+au+lait")).toEqual({ ok: true, value: "café+au+lait" });
    expect(convert("component-decode", "caf%C3%A9+au+lait", true)).toEqual({ ok: true, value: "café au lait" });
  });

  it("reports malformed input instead of throwing", () => {
    const result = convert("component-decode", "%E0%A4%A");
    expect(result.ok).toBe(false);
  });

  it("round-trips through the inverse mode", () => {
    for (const { id } of MODES.filter((m) => m.id.endsWith("encode"))) {
      const encoded = convert(id, "hello world?q=café & more");
      expect(encoded.ok).toBe(true);
      if (encoded.ok) expect(convert(inverse(id), encoded.value)).toEqual({ ok: true, value: "hello world?q=café & more" });
    }
  });
});

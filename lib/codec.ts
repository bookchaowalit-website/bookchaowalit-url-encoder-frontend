export type Mode = "component-encode" | "component-decode" | "uri-encode" | "uri-decode";

export const MODES: Array<{ id: Mode; label: string; scope: string }> = [
  { id: "component-encode", label: "encodeURIComponent", scope: "query value" },
  { id: "component-decode", label: "decodeURIComponent", scope: "query value" },
  { id: "uri-encode", label: "encodeURI", scope: "full address" },
  { id: "uri-decode", label: "decodeURI", scope: "full address" },
];

export type Result = { ok: true; value: string } | { ok: false; error: string };

/**
 * Runs the selected codec. `plusAsSpace` treats "+" as a space when decoding
 * (application/x-www-form-urlencoded, e.g. HTML form query strings).
 */
export function convert(mode: Mode, input: string, plusAsSpace = false): Result {
  try {
    switch (mode) {
      case "component-encode":
        return { ok: true, value: encodeURIComponent(input) };
      case "component-decode":
        return { ok: true, value: decodeURIComponent(plusAsSpace ? input.replace(/\+/g, " ") : input) };
      case "uri-encode":
        return { ok: true, value: encodeURI(input) };
      case "uri-decode":
        return { ok: true, value: decodeURI(plusAsSpace ? input.replace(/\+/g, " ") : input) };
    }
  } catch (error) {
    const reason = error instanceof URIError ? "Malformed percent-encoding (a % must be followed by two hex digits forming valid UTF-8)." : "Could not process input.";
    return { ok: false, error: reason };
  }
}

/** The mode that reverses `mode`, used by the swap action. */
export function inverse(mode: Mode): Mode {
  const map: Record<Mode, Mode> = {
    "component-encode": "component-decode",
    "component-decode": "component-encode",
    "uri-encode": "uri-decode",
    "uri-decode": "uri-encode",
  };
  return map[mode];
}

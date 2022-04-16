/**
 * `type Split<T extends string, S extends string>`
 * > `S = ""`
 * ## Example: 
 * ```ts
 * type split1 = Split<"hello world">; // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
 * type split2 = Split<"hello world", " ">; // ["hello", "world"]
 * ```
 */
type Split<T extends string, S extends string = ""> =
  T extends S
    ? []
    : T extends `${infer A}${S}${infer B}`
      ? [A, ...Split<B, S>]
      : [T];

export type { Split };
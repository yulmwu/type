/**
 * @description Split T into U
 * @param T string
 * @param U string = ""
 * 
 * ## Example: 
 * ```ts
 * type split1 = Split<"hello world">; // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
 * type split2 = Split<"hello world", " ">; // ["hello", "world"]
 * ```
 */
type Split<T extends string, U extends string = ""> =
  T extends U
    ? []
    : T extends `${infer A}${U}${infer B}`
      ? [A, ...Split<B, U>]
      : [T];

export type { Split };
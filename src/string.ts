import { Add, Sub, _Less } from "./math";

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

/**
 * @description Join T
 * @param T Array<string>
 * @param U string = " "
 * 
 * ## Example: 
 * ```ts
 * type join1 = Join<["a", "b", "c"]>; // a b c
 * type join2 = Join<["a", "b", "c"], ", ">; // a, b, c
 * ```
 */
type Join<T extends Array<string>, U extends string = " ", 
            R extends string = '', I extends number = 0> =
    _Less<I, Sub<T['length'], 1>> extends true
        //@ts-ignore
        ? Join<T, U, `${R}${T[I]}${U}`, Add<I, 1>>
        : `${R}${T[Sub<T['length'], 1>]}`;

/**
 * @description Concat T
 * @param T Array<string>
 * 
 * ## Example: 
 * ```ts
 * type concat = Concat<["a", "b", "c"]>; // abc
 * ```
 */
type Concat<T extends Array<string>> = Join<T, "">;

export type { Split, Join, Concat };
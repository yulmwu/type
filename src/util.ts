/**
 * @description Repeat T, N times
 * @param N number
 * @param T any = 0
 * 
 * ## Example: 
 * ```ts
 * type repeat1 = Repeat<3, "a">; // ["a", "a", "a"]
 * type repeat2 = Repeat<3>; // [0, 0, 0]
 * ```
 */
type Repeat<N extends number, T = 0, V extends Array<T> = []> = 
    V extends { length: N } 
        ? V : Repeat<N, T, [...V, T]>;

/**
 * @description Filter interface T
 * @param T any
 * @param U any
 * 
 * ## Example: 
 * ```ts
 * interface Abcd { 
 *     a: number, 
 *     b: string, 
 *     c: Array<boolean>, 
 *     d: number, e: string 
 * };
 * 
 * type filter = Filter<Abcd, number | Array<boolean>>; // filter = { d: number, a: number, c: Array<boolean> }
 * ```
 */
type Filter<T, U> = Pick<
    T,
    { [K in keyof T]: T[K] extends U ? K : never }[keyof T]
>;

export type { Repeat, Filter };
/**
 * `type Repeat<N extends number, T>`
 * > `T = 0`
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
 * `type Filter<A, B>`
 * > `T = 0`
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
type Filter<A, B> = Pick<
  A,
  { [K in keyof A]: A[K] extends B ? K : never }[keyof A]
>;

export type { Repeat, Filter };
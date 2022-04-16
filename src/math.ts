import { Repeat } from "./tool";

/**
 * `Add<A extends number, B extends number>`
 * ## Example: 
 * ```ts
 * type add = Add<1, 2>; // 3
 * ```
 */
type Add<A extends number, B extends number> = 
    [...Repeat<A>, ...Repeat<B>] extends { length: infer L }
        ? L : never;

/**
 * `Sub<A extends number, B extends number>`
 * ## Example: 
 * ```ts
 * type sub = Sub<3, 2>; // 1
 * ```
 */
type Sub<A extends number, B extends number> =
    Repeat<A> extends [...Repeat<B>, ...infer R]
        ? R extends { length: infer L } ? L : never 
            : never;

/**
 * `Mul<A extends number, B extends number>`
 * ## Example: 
 * ```ts
 * type mul = Mul<3, 2>; // 6
 * ```
 */
type Mul<A extends number, B extends number> =
    A extends 0 
        ? 0 : B extends 0
            ? 0 : B extends 1
                //@ts-ignore
                ? A : Add<Mul<A, Sub<B, 1>>, A>

/**
 * `Div<A extends number, B extends number>`
 * ## Example: 
 * ```ts
 * type div = Div<6, 2>; // 3
 * ```
 */
type Div<A extends number, B extends number> = 
    A extends 0 
        ? 0 : B extends 0
            ? never : Sub<A, B> extends never
                ? 0 : Add<1, Div<Sub<A, B> extends never
                    ? 0 : Sub<A, B>, B>>;

/**
 * `Pow<A extends number, B extends number>`
 * ## Example: 
 * ```ts
 * type pow = Pow<3, 5>; // 243
 * ```
 */
type Pow<A extends number, B extends number> = 
    B extends 1
        //@ts-ignore
        ? A : Mul<A, Pow<A, Sub<B, 1>>>;

export type { Add, Sub, Mul, Div, Pow };
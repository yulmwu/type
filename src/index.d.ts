// See `../index.d.ts` for an example.

export type OptionalHelper<A> = { [K in keyof A]: A[K] }
export type SqrtHelper<T extends number, U extends number> = Div<Add<Div<T, U>, U>, 2>

export type LessThan<T extends number, U extends number> = 
    T extends 0
        ? U extends 0 ? false : true
        : U extends 0 ? false : LessThan<Sub<T, 1>, Sub<U, 1>>

export type LessThanEqual<T extends number, U extends number> =
    T extends 0
        ? true : U extends 0 ? false : LessThanEqual<Sub<T, 1>, Sub<U, 1>>

export type GreaterThan<T extends number, U extends number> = LessThan<U, T>
export type GreaterThanEqual<T extends number, U extends number> = LessThanEqual<U, T>

export type Repeat<N extends number, T = 0, V extends Array<T> = []> = 
    V extends { length: N }
        ? V : Repeat<N, T, [...V, T]>

export type Filter<T, U> = Pick<T, { [K in keyof T]: T[K] extends U ? K : never }[keyof T]>
export type Optional<T, U extends keyof T> = OptionalHelper<Omit<T, U> & { [K in U]?: T[K] }>

export type Add<T extends number, U extends number> = 
    [...Repeat<T>, ...Repeat<U>] extends { length: infer L }
        ? L : never

export type Sub<T extends number, U extends number> =
    Repeat<T> extends [...Repeat<U>, ...infer R]
        ? R extends { length: infer L } ? L : never 
            : never

export type Mul<T extends number, U extends number> =
    T extends 0 ? 0 : U extends 0 ? 0 : T extends 1
        ? U : Add<Mul<T, Sub<U, 1>>, T>

export type Div<T extends number, U extends number> = 
    T extends 0
        ? 0 : U extends 0
            ? never : Sub<T, U> extends never
                ? 0 : Add<1, Div<Sub<T, U> extends never ? 0 : Sub<T, U>, U>>

export type Pow<T extends number, U extends number> = 
    U extends 1
        ? T : U extends 0
            ? T : Mul<T, Pow<T, Sub<U, 1>>>

export type Modulo<T extends number, U extends number> =
    LessThan<T, U> extends true
        ? T : Modulo<Sub<T, U>, U>

export type Sqrt<T extends number, U extends number = 0> =
    U extends 0
        ? Sqrt<T, Div<T, 2>> : U extends SqrtHelper<T, U>
            ? U : Sqrt<T, SqrtHelper<T, U>>

export type Permutation<T, U = T> = 
    [T] extends [never]
        ? [] : U extends unknown
            ? [U, ...Permutation<Exclude<T, U>>] : never

export type Split<T extends string, U extends string = ''> = 
    T extends U 
        ? [] : T extends `${infer A}${U}${infer B}`
            ? [A, ...Split<B, U>] : [T]

export type Join<T extends Array<string>, U extends string = ' ', R extends string = '', I extends number = 0> = 
    LessThan<I, Sub<T['length'], 1>> extends true
        ? Join<T, U, `${R}${T[I]}${U}`, Add<I, 1>>
        : `${R}${T[Sub<T['length'], 1>]}`

export type Concat<T extends Array<string>> = Join<T, ''>

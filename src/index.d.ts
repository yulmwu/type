type Split<T extends string, S extends string = ""> =
  T extends S
    ? []
    : T extends `${infer A}${S}${infer B}`
      ? [A, ...Split<B, S>]
      : [T];

type Arr<N extends number, V extends Array<number> = []> = 
    V extends { length: N } 
        ? V : Arr<N, [...V, 0]>;

type Add<A extends number, B extends number> = 
    [...Arr<A>, ...Arr<B>] extends { length: infer L }
        ? L : never;

type Sub<A extends number, B extends number> =
    Arr<A> extends [...Arr<B>, ...infer R]
        ? R extends { length: infer L } ? L : never 
            : never;

type Mul<A extends number, B extends number> =
    A extends 0 
        ? 0 : B extends 0
            ? 0 : B extends 1
                // @ts-ignore
                ? A : Add<Mul<A, Sub<B, 1>>, A>;

type Div<A extends number, B extends number> = 
    A extends 0 
        ? 0 : B extends 0
            ? never : Sub<A, B> extends never
                ? 0 : Add<1, Div<Sub<A, B> extends never
                    ? 0 : Sub<A, B>, B>>;
  
type Pow<A extends number, B extends number> = 
    B extends 1
        ? A
        : Mul<A, Pow<A, Sub<B, 1>>>;

declare export type { Split, Add, Sub, Mul, Div, Pow };
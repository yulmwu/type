type Split<T extends string, S extends string = ""> =
  T extends S
    ? []
    : T extends `${infer A}${S}${infer B}`
      ? [A, ...Split<B, S>]
      : [T];

type Arr<N extends number, V extends Array<number> = []> =
  V["length"] extends N
    ? V
    : Arr<N, [...V, 0]>;
  
type Add<A extends number, B extends number> = 
  [...Arr<A>, ...Arr<B>] extends { length: infer L }
    ? L extends number    
      ? L
      : never
    : never;
  
declare export type { Split, Add };
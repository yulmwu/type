type Split<T extends string, S extends string = ""> =
  T extends S
    ? []
    : T extends `${infer A}${S}${infer B}`
      ? [A, ...Split<B, S>]
      : [T];


let _: Split<"test">;
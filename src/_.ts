type Filter<A, B> = Pick<
  A,
  { [K in keyof A]: A[K] extends B ? K : never }[keyof A]
>;

interface dd {
    A: string,
    B: number,
    C: boolean,
    D: string,
    E: Array<number>  
};

type _ = Filter<dd, Array<number> | string>;
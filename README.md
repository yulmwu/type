type level programming

```sh
npm install typelevel@latest
```

# Examples
```ts
import type {
    Split, Join, Concat,
    Add, Sub, Mul, Div, Pow, Modulo, Sqrt,
    Filter, Repeat, optional
} from 'typelevel';

type split = Split<"hello world">; // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]

type add = Add<1, 2>; // 3
type sub = Sub<3, 2>; // 1
type mul = Mul<3, 2>; // 6
type div = Div<6, 2>; // 3
type pow = Pow<3, 5>; // 243
type modulo = Modulo<5, 3>; // 2
type sqrt = Sqrt<81>; // 9

interface Abcd { a: number, b: string, c: Array<boolean>, d: number, e: string };
type filter = Filter<Abcd, number | Array<boolean>>; 
// { d: number, a: number, c: Array<boolean> }

type repeat = Repeat<3, "a">; // ["a", "a", "a"]

type optional = Optional<{ a: string; b: number; c: boolean }, 'a' | 'c'>;
 // { b: number; a?: string | undefined; c?: boolean | undefined; }

type join1 = Join<["a", "b", "c"]>; // a b c
type join2 = Join<["a", "b", "c"], ", ">; // a, b, c
type concat = Concat<["a", "b", "c"]>; // abc
```
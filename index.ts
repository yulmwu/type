import type {
    // ./src/string.ts
    Split,
    // ./src/math.ts
    Add, Sub, Mul, Div, Pow,
    // ./src/tool.ts
    Filter, Repeat
} from './src';

type split = Split<"hello world">; // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]

type add = Add<1, 2>; // 3
type sub = Sub<3, 2>; // 1
type mul = Mul<3, 2>; // 6
type div = Div<6, 2>; // 3
type pow = Pow<3, 5>; // 243

interface Abcd { a: number, b: string, c: Array<boolean>, d: number, e: string };
type filter = Filter<Abcd, number | Array<boolean>>; //type filter = { d: number, a: number, c: Array<boolean> }
type repeat = Repeat<3, "a">; // ["a", "a", "a"]
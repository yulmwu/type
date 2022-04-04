import type {
    Split,
    Add,
    Sub,
    Mul,
    Div
} from './src';

type split = Split<"hello world">; // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
type add = Add<1, 2>; // 3
type sub = Sub<3, 2>; // 1
type mul = Mul<3, 2>; // 6
type div = Div<6, 2>; // 3
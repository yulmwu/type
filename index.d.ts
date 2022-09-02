import type * as T from './src/index'

type split = T.Split<'hello world'>
/* ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'] */

type add = T.Add<1, 2> // 3
type sub = T.Sub<3, 2> // 1
type mul = T.Mul<3, 2> // 6
type div = T.Div<6, 2> // 3
type pow = T.Pow<3, 5> // 243
type modulo = T.Modulo<5, 3> // 2
type sqrt = T.Sqrt<81> // 9

interface Abcd extends Record<'a' | 'b', string> {
    c: number
    d: Array<boolean>
} /* { a: string; b: string; c: number; d: boolean[]; } */

type filter = T.Filter<Abcd, number | Array<boolean>>
/* filter = { c: number, d: Array<boolean> } */

type repeat = T.Repeat<3, 'a'> // ['a', 'a', 'a']

type optional = T.Optional<{ a: string; b: number; c: boolean }, 'a' | 'c'>
/* { b: number; a?: string | undefined; c?: boolean | undefined; } */

type join1 = T.Join<['a', 'b', 'c']> // 'a b c'
type join2 = T.Join<['a', 'b', 'c'], ', '> // 'a, b, c'
type concat = T.Concat<['a', 'b', 'c']> // 'abc'

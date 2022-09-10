import type * as Types from './src/index'

type split = Types.Split<'Hello, World'>
//   ^ ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d"]

type add = Types.Add<1, 2>
//   ^ 3
type sub = Types.Sub<3, 2>
//   ^ 1
type mul = Types.Mul<3, 2>
//   ^ 6
type div = Types.Div<6, 2>
//   ^ 3
type pow = Types.Pow<3, 5>
//   ^ 243
type modulo = Types.Modulo<5, 3>
//   ^ 2
type sqrt = Types.Sqrt<81>
//   ^ 9

type perm = Types.Permutation<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>
//   ^ [1, 2, 3, 4, 5, 6, 7, 8, 9] | [1, 2, 3, 4, 5, 6, 7, 9, 8] | ... 362877 more

interface Abcd extends Record<'a' | 'b', string> {
    c: number
    d: Array<boolean>
}

type filter = Types.Filter<Abcd, number | Array<boolean>>
//   ^ { c: number, d: Array<boolean> }

type repeat = Types.Repeat<3, 'a'>
//   ^ ["a", "a", "a"]

type optional = Types.Optional<{ a: string; b: number; c: boolean }, 'a' | 'c'>
//   ^ { b: number; a?: string | undefined; c?: boolean | undefined; }

type joinWhiteSpace = Types.Join<['a', 'b', 'c']>
//   ^ "a b c"
type join = Types.Join<['a', 'b', 'c'], ', '>
//   ^ "a, b, c"
type concat = Types.Concat<['a', 'b', 'c']>
//   ^ "abc"

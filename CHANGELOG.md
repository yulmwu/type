# 1.x

## **1.0.0**
* **math.ts**
    * `type Add` 추가
    * `type Sub` 추가
    * `type Mul` 추가
    * `type Div` 추가
    * `type Pow` 추가

* **string.ts**
    * `type Split` 추가

* **tool.ts**
    * `type Repeat` 추가
    * `type Filter` 추가


## **1.0.1** ~ **1.0.2**
* 변경사항 없음


## **1.0.3**
* `type Modulo` 추가


## **1.0.4** - Bug Fixes
* `type Mul` Bug 
    * 리팩토링 도중 `//@ts-ignore` 로 인한 발견하지 못한 버그 수정
        * `//@ts-ignore` 제거
    * 해당 버그로 인하여, `type Mul` 및 `type Pow` 사용이 불가능 하였습니다.

* `CHANGELOG.md` 추가
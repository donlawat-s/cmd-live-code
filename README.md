# CODEMONDAY-live-code-interview

Questions for live code interview

### Question 1
#### Input
Array of number `1...2`

> `To Copy to paste in codeshare.io for the candidate`
```js
const numbers = [1, 2, 3, 4, 5, 6, 7]

/* ให้ return ค่านี้ >>> [4, 8, 12]
(เอาเลขคู่ * 2) */
```

#### Output
Even number times two \
กรองผลลัพธ์เหลือแต่เลขคู่ แล้วคูณด้วย 2
```js
[4, 8, 12]
```

------

### Question 2
#### Input
Collection of user (array of user object)

> `To Copy to paste in codeshare.io for the candidate`
```js
const employees = [
  {
    name: 'Win',
    age: 25
  },
  {
    name: 'Ton',
    age: 25
  },
  {
    name: 'Boat',
    age: 26
  },
  {
    name: 'Oak',
    age: 28
  }
]

/* TODO
  1. Transform employees to ['Win', 'Ton', 'Boat', 'Oak']
  2. Find max age and print. Expected result [{ name: 'Oak', age: 28 }]
  3. Transform employee to [{ 25: ['Win', 'Ton'], 26: ['Boat'], 28: ['Oak']}]
  4. อยากได้ฟังก์ชันที่เรียกใช้โดยเรียก getAgeByName('Boat') แล้วได้ 26 กลับมา
*/
```

#### Output
Write function that return age of collection specified
```
1. ['Win', 'Ton', 'Boat', 'Oak']
2. [{ name: 'Oak', age: 28 }]
3. [{ 25: ['Win', 'Ton'], 26: ['Boat'], 28: ['Oak']}]
4. getAgeByName('Boat') >>> 26
```

------

### Question 5

#### Input

`num` ood number `1,3,5,7,9,...33,35,37,...`

#### Output
Cross sign made from `*` and space ` ` character print to console.

#### Example

Input: `x = 5`
```
*   *
 * *
  *
 * *
*   *
```


Input:`x = 9`
```
*       *
 *     * 
  *   *  
   * *   
    *    
   * *   
  *   *  
 *     * 
*       *
```

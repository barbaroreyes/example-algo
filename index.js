const numbers = [3,2,1]


const goUp = arr => arr.sort((a,b)=> a - b )

const burbleSort = (arr) => {
for (let i = 0 ; i < arr.length; i++) {
    for(let j = 0; j < arr.length -1-i; j++) {
        console.log(arr, arr[j],arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
          let temp = arr[j]
          arr[j]= arr[j + 1]
          arr[j+1]= temp

      }
    }
}
return arr
}
// console.log(burbleSort(numbers)

const addUp = (n) => {
//  let total = 0;
//  for (let i = 0; i <= n; i++) {
//      total += i
//  }
//  return total
return n * (n + 1) /2    //0(1)
}
// console.log(addUp(6))

// const  parr = 'Hola hola que tal bienvenidos  un dias  hoy vamos a resolver problemas'

// const  normalize = word => word
// let dict = {pal:'', number:0}
// .toLowerCase()
// .replace(/[.!,]/g,"")



// // console.log(normalize(parr))
// const countString = (s) => {
//     let dict = {};
//     const conteoChange = s.split(' ')
//     for(let word of conteoChange){
        
//     }
     
// }
// console.log(countString(parr))

const printAllPairs = (n) => {     //O(n2)
    for(let i = 0; i < n ; i++) {
     for(let j = 0; j < n ; j++) {
        console.log(i,j) 
     }
    }
}
//  printAllPairs(3)
const logAtlestFive = (n) =>{
    for (let i = 1 ; i <= Math.max(5,n); i++){
        console.log(i)
    }
}
// logAtlestFive(1)
const countUpdated = (n) => {
    console.log('goin Up')
    for(let i =0 ; i< n ; i++){
     console.log(i)
    }
    console.log('goin Down')
    for(let j = n - 1 ; j >= 0 ; j--){
        console.log(j)
    }
    console.log('back Down bye')
}
countUpdated(10)
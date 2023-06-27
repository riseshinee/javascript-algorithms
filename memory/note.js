/**
 * 객체에 대한 참조
 */
 //example
let foo = {
  bar1: memory(), //5kb
  bar2: memory() //5kb
}

//foo 객체 전체를 로딩해야 하므로 10kb의 메모리를 사용
function clickEvent(){
  alert(foo.bar1[0]) 
}

/**
 * 속성 호출을 분석하고 최적화하기
 */
function someLargeArray(){
  return new Array(1000000);
}

let exampleObject = {
  'prop1': someLargeArray(),
  'prop2': someLargeArray()
}
//bad
function printProperty(obj){
  console.log(obj.prop1)
}
printProperty(exampleObject);
//right
function printProperty2(prop){
  console.log(prop)
}
printProperty2(exampleObject.prop1); //필요한 속성만 참조하기
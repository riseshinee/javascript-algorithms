/**
 * 가변 배열을 생성하는 함수
 * @param {*} rows 
 * @param {*} columns 
 * @returns 
 */
function matrix(rows, columns){
  let jaggedarray = new Array(rows);
  for( let i=0; i< columns; i+=1){
    jaggedarray[i] = new Array(rows);
  }
  return jaggedarray;
}

let M = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20]
]

/**
 * 행렬을 나선형으로 출력하기
 * topRow, leftCol, btmRow, rightCol 변수를 초기화합니다. 
 * topRow는 상단 행 인덱스, leftCol은 좌측 열 인덱스, btmRow는 하단 행 인덱스, rightCol은 우측 열 인덱스를 나타냅니다.
 * 반복문을 사용하여 나선형으로 배열 요소를 출력합니다. 이때, 상단 행과 우측 열은 왼쪽에서 오른쪽으로 이동하면서 출력하고, 
 * 우측 열과 하단 행은 위에서 아래로 이동하면서 출력합니다. 그리고 하단 행과 좌측 열은 오른쪽에서 왼쪽으로 이동하면서 출력하고, 좌측 열과 상단 행은 아래에서 위로 이동하면서 출력합니다.
 * 반복문이 종료되면 모든 요소가 나선형으로 출력됩니다.
 * 주의할 점은, topRow가 btmRow보다 작거나 같고, leftCol이 rightCol보다 작거나 같을 때까지만 반복문이 실행된다는 것입니다. 
 * 이는 배열이 홀수 행과 열을 가질 때, 가운데 요소를 중복해서 출력하지 않기 위한 조건입니다.
 * 이 코드는 주어진 배열을 시계 방향으로 나선형으로 출력하는 알고리즘을 구현한 것입니다.
 * 시간복잡도: O(mn)
 * @param {*} M 
 */
function spiralPrint(M){
  let topRow = 0, //상부 행
    leftCol = 0, //하부 행
    btmRow = M.length - 1, //왼쪽 열
    rightCol = M[0].length - 1 //오른쪽 열

  while( topRow < btmRow && leftCol < rightCol){
    for( let col = 0; col <= rightCol; col++){
      console.log(M[topRow][col]);
    }
    topRow++;

    for( let row = topRow; row <= btmRow; row++){
      console.log(M[row][rightCol]);
    }
    rightCol--;
    
    if(topRow <= btmRow){
      for(let col = rightCol; col >= 0; col--){
        console.log(M[btmRow][col]);
      }
      btmRow--;
    }
    if(leftCol <= rightCol){
      for(let row = btmRow; row > topRow; row--){
        console.log(M[row][leftCol]);
      }
      leftCol++;
    }

  }
}
spiralPrint(M);
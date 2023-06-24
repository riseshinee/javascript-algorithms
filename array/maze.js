const board = 
`%e%%%%%%%%%\n%...%.%...%\n%.%.%.%.%%%\n%.%.......%\n%.%%%%.%%.%\n%.%.....%.%\n%%%%%%%%%x%`;

let mazeMatrix = board.split("\n").map((v)=>{
  return v.split("");
})

/**
 * 찾고자 하는 문자의 행과 열을 반환
 * @param {*} char 찾고자 하는 문자
 * @param {*} mazeMatrix 
 * @returns 
 */
function findChar(char, mazeMatrix){
  let row = mazeMatrix.length,
    column = mazeMatrix[0].length;

  for(let i=0; i<row; i++){
    for(let j=0; j<column; j++){
      if(mazeMatrix[i][j] == char){
        return[i,j];
      }
    }
  }
}

/**
 * 행렬을 문자열로 출력
 * @param {*} matrix 
 */
function printMatrix(matrix){
  var mazePrintStr = "",
    row = matrix.length,
    column = matrix[0].length;
  
  for( let i=0; i<row; i++){
    for(let j=0; j<column; j++){
      mazePrintStr += mazeMatrix[i][j];
    }
    mazePrintStr += "\n";
  }
  console.log(mazePrintStr);
}

/**
 * 길찾기
 * 주어진 미로(mazeMatrix)에서 출구('x')까지의 길을 찾는 재귀적인 알고리즘입니다. 
 * mazeMatrix 행과 열의 길이를 변수 row와 column에 저장합니다.
 * findChar 함수를 사용하여 출발지('e')와 도착지('x')의 위치를 찾습니다. 
 * 출발지와 도착지의 위치는 각각 startPos와 endPos 변수에 저장됩니다.
 * path 함수를 정의합니다. 이 함수는 재귀적으로 호출됩니다.
 * 현재 위치가 미로의 범위를 벗어나거나 벽에 해당하는 문자('%' 또는 '+')인 경우 false를 반환합니다.
 * 현재 위치가 도착지인 경우 true를 반환합니다.
 * 현재 위치가 방문한 곳을 나타내기 위해 '+'로 표시되고, printMatrix 함수를 호출하여 미로의 현재 상태를 출력합니다.
 * 현재 위치에서 상하좌우로 이동하며 재귀적으로 path 함수를 호출합니다. 이동한 위치에서 path 함수가 true를 반환하는 경우, * 해당 위치는 출구까지의 경로에 속하므로 true를 반환합니다.
 * 현재 위치를 다시 '.'로 표시하고 false를 반환합니다.
 * path 함수를 출발지의 위치로 호출하여 알고리즘을 실행합니다.
 * 시간복잡도: O(mn)
 * @param {*} mazeMatrix 
 */
function mazePathFinder(mazeMatrix){
  let row = mazeMatrix.length,
    column = mazeMatrix[0].length,
    startPos = findChar('e',mazeMatrix),
    endPos = findChar('x',mazeMatrix);

    path(startPos[0], startPos[1]);

    function path(x,y){
      if( x > row - 1 || y > column - 1 || x < 0 || y < 0){
        return false;
      }

      if( x == endPos[0] && y == endPos[1]){
        return true;
      }
      if( mazeMatrix[x][y] == '%' || mazeMatrix[x][y] == '+'){
        return false;
      }

      mazeMatrix[x][y] = '+';
      printMatrix(mazeMatrix);

      if(path(x,y-1) || path(x+1,y) || path(x,y+1), path(x-1,y)){
        return true;
      }
      mazeMatrix[x][y] = '.';
      return false;
    }
}

mazePathFinder(mazeMatrix);
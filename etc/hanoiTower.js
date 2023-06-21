/*
하노이탑 (재귀함수 DFS)
numDisks: 이동해야 할 원반의 수
source: 출발지 탑의 이름
auxiliary: 보조 탑의 이름
destination: 목적지 탑의 이름
*/
function hanoiTower(numDisks, source, auxiliary, destination) {
  if (numDisks === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }

  hanoiTower(numDisks - 1, source, destination, auxiliary);
  console.log(`Move disk ${numDisks} from ${source} to ${destination}`);
  hanoiTower(numDisks - 1, auxiliary, source, destination);
}

// 테스트
hanoiTower(3, 'A', 'B', 'C');
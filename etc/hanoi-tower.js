/**
 * 하노이탑 (재귀함수 DFS)
 * @param {*} numDisks 이동해야 할 원반의 수
 * @param {*} source 출발지 탑의 이름
 * @param {*} auxiliary 보조 탑의 이름
 * @param {*} destination 목적지 탑의 이름
 * @returns 
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

hanoiTower(3, 'A', 'B', 'C');
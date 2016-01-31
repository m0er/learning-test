var location1 = Math.floor(Math.random() * 5),
  location2 = location1 + 1,
  location3 = location1 + 2,
  guess, // undefined
  hits = 0,
  guesses = 0,
  isSunk = false;

while (!isSunk) {
  guess = prompt('준비, 조준, 발사! (0~6 사이의 추측한 숫자를 입력하세요):');
  if (guess == null) {
    break;
  }

  if (guess < 0 || guess > 6) {
    alert('올바른 방 번호를 입력하세요!');
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1;
      alert('명중!');
      if (hits == 3) {
        isSunk = true;
        alert('전함 침몰!');
      }
    } else {
      alert('실패!');
    }
  }
}

var stats = '여러분은 전함을 격침시키기 위해 ' + guesses + '번 발사했습니다.' + ' 따라서 명중률은 ' + (3/guesses) + '입니다.';
alert(stats);

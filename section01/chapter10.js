// 1. 반복문
for (let i = 0; i < 10; i++) {
    console.log(`i : ${i}`);

    if (i === 5) {
        console.log(`i is 5..! Let's break.`);
        break;
    }
}

for (let j = 0; j < 10; j++) {
    if (j % 2 === 0) continue
    console.log(`j는 홀수 : ${j}`);
}
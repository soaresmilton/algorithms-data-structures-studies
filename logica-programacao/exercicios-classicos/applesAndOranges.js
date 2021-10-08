
const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  let countApples = 0;
    let countOranges = 0;
    
    for (let apple of apples) {
        let d = apple + a;
        if(d >= s && d <= t) countApples += 1;
    }
    
    for (let orange of oranges) {
        let d = orange + b;
        if(d >= s && d <= t) countOranges += 1;
    }
    
    console.log(countApples);
    console.log(countOranges);
}

countApplesAndOranges()

countApplesAndOranges()
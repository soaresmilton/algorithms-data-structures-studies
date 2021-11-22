function viralAdvertising(n) {
  let cumulatedLikes = 0;
  let recipients = 5;

  for (let i = 0; i < n; i++) {
    recipients = Math.floor(recipients / 2);
    cumulatedLikes += recipients;
    recipients *= 3;

  }

  return cumulatedLikes;
}

const n = 5;
console.log(viralAdvertising(n));
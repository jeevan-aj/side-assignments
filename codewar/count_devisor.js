function getDivisorsCnt(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        // If the divisor is found
        // Increment count if divisors are distinct (i and n/i)
        if (n / i === i) {
          count++;
        } else {
          count += 2;
        }
      }
    }
    return count;
  }
let n = 10;

for (let i = 1; i <= n; i++) {
  console.log(
    normalNumber(i) + spaces(n - i) + spaces(n - i) + normalReverseNumber(i - 1)
  );
}

function normalNumber(n) {
  let run = "";
  for (let i = 1; i <= n; i++) {
    run += i + " ";
  }
  return run;
}

function normalReverseNumber(n) {
  let run = "";
  for (let i = n; i >= 1; i--) {
    run += i + " ";
  }
  return run;
}

function spaces(n) {
  let run = "";
  for (let i = 1; i <= n; i++) {
    run += "  ";
  }
  return run;
}

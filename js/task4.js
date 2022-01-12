let souvenirWeight = Number(prompt("Сколько игрушек вы хотите?"));
let toyWeight = Number(prompt("Сколько сувениров вы хотите?"));
alert(
  "Total weight: " +
    (souvenirWeight * 75 + toyWeight * 112) / 1000 +
    " kg" +
    "/" +
    (souvenirWeight * 75 + toyWeight * 112) +
    " gr"
);

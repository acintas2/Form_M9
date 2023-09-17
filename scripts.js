
const selectDorsal = document.getElementById("dorsal");

// Genera 100 opciones y agrégalas al elemento select

for (let i = 1; i <= 100; i++) {
  const option = document.createElement("option");
  option.text = i;
  option.value = i;
  selectDorsal.appendChild(option);
}
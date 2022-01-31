// function initDropdownList(id, min, max) {
//   var select, i, option;

//   select = document.getElementById(id);
//   for (i = min; i <= max; i += 1) {
//     option = document.createElement("option");
//     option.value = option.text = i;
//     select.add(option);
//   }
// }

// initDropdownList("test1", 10, 20);
// initDropdownList("test2", 100, 200);

const authorOptionData = [
  { value: "cat", text: "Cat" },
  { value: "dog", text: "Dog" },
];
const repositoryOptionData = [
  { value: "banana", text: "Banana" },
  { value: "apple", text: "Apple" },
];

function getAuthorValue(id) {
  var selectedValue = document.getElementById(id).value;

  console.log("Value", selectedValue);
}
const DropdownList = async (id) => {
  console.log("id", id);
  var select, i, option;

  select = await document.getElementById(id);
  for (i = 0; i <= authorOptionData.length; i += 1) {
    option = document.createElement("option");
    console.log("option", option);
    option.value = authorOptionData[i].value;
    option.text = authorOptionData[i].text;
    select.add(option);
  }
};
DropdownList("authorSelect");
DropdownList("repoSelect");
document.getElementById("dateInput").addEventListener("change", function () {
  var input = this.value;
  var dateEntered = new Date(input);
  console.log(input); //e.g. 2015-11-13
  console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)
});

document.getElementById("dateInput").valueAsDate = new Date();

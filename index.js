let arreyStaff = []

class Staff {
  constructor(options) {
    this.plant = options.plant;
    this.position = options.position;
    this.surname = options.surname;
    this.name = options.name;
    this.age = options.age;
    this.rate = options.rate;
  }
}

function clickMeStaff() {
  let plantstaffinput = document.getElementById("plantstaffinput");
  let positionstaffinput = document.getElementById("positionstaffinput");
  let surnamestaffinput = document.getElementById("surnamestaffinput");
  let namestaffinput = document.getElementById("namestaffinput");
  let agestaffinput = document.getElementById("agestaffinput");
  let ratestaffinput = document.getElementById("ratestaffinput");

  let plantstaffinputvalue = plantstaffinput.value;
  let positionstaffinputvalue = positionstaffinput.value;
  let surnamestaffinputvalue = surnamestaffinput.value;
  let namestaffinputvalue = namestaffinput.value;
  let agestaffinputvalue = agestaffinput.value;
  let ratestaffinputvalue = ratestaffinput.value;

let staff = new Staff({
  plant = plantstaffinputvalue,
  position = positionstaffinputvalue,
  surname = surnamestaffinputvalue,
  name = namestaffinputvalue,
  age = agestaffinputvalue,
  rate = ratestaffinputvalue,
  
  })

arreyStaff.push(staff)
console.log(arreyStaff)

fetch("http://localhost:8000/inputstaff", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(arreyStaff),
  })
    .then(
      (response) => response.json(),
      (err) => console.log("Not")
    )

    .then((response) => response.text()) 
    .then((inf) => {
      let inp = document.getElementById("ib");
      let divib = document.createElement("div");
      divib.className = ib;
      divib.innerText = inf;
      inp.after(divib);
      console.log(inf);
      console.log(typeof inf);
    });


}

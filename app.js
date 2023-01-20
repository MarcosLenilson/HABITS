const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const buttonAddDay = document.getElementById("btn-dia")
const buttonAddHabits = document.getElementById("habits")

// #Adicionar HÁBITOS => Caixa de texto
// buttonAddHabits.addEventListener("click", addHabits)
// function addHabits() {
//   document.getElementById("text-habits").style.display = "block";
//   localStorage.setItem("add@habits", nlwSetup.data).value
// }

// #Adicionar DIAS
buttonAddDay.addEventListener("click", add)
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ⛔")
    return
  }
  alert("Dia adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

// #Salva no localStorage
form.addEventListener("change", save)
function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}


// const addHab = JSON.parse(localStorage.getItem("add@habits")) || {}
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
// nlwSetup.setData(addHab)
nlwSetup.load()

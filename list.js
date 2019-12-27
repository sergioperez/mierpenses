let reportTable = []

function myFunction() {
  alert("hola")
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let websiteReady = _checkWebsiteReady()
async function startOnWebsiteReady() {
  while(!websiteReady) {
    await new Promise(r => setTimeout(r, 2000));
    websiteReady = _checkWebsiteReady()
    console.log(_checkWebsiteReady())
  }
  await new Promise(r => setTimeout(r, 250));
  main()
} 

function _checkWebsiteReady() {
  return (document.getElementsByClassName('cnqr-spinner-wheel').length === 0)
}

/** Adds project text input to the list of an expense report */
function addProjectTextInput() {
  const buttonsClassName = "btn-toolbar"
  const buttonsContainers = document.getElementsByClassName(buttonsClassName)
  let buttonsContainer = null
  for(cont of buttonsContainers) {
    if(cont.getAttribute("role") === "toolbar") {
      buttonsContainer = cont
    }
  }

  const projectCodeDiv = document.createElement('div')
  projectCodeDiv.innerHTML = '<p>Project code</p><input id="expenseproject" type="text" class="form-control"/>'
  const expenseTypeDiv = document.createElement('div')
  expenseTypeDiv.innerHTML = '<p>Expense Type</p><input id="expensetype" type="text" class="form-control"/>'
  const allocateSelectedDiv = document.createElement('div')
  allocateSelectedDiv.innerHTML = '<button onClick="TODO-HANDLE-THIS" type="button" class="btn btn-lg btn-primary"><span>Allocate Selected</span></button>'
  buttonsContainer.appendChild(projectCodeDiv)
  buttonsContainer.appendChild(expenseTypeDiv)
  buttonsContainer.appendChild(allocateSelectedDiv)
}

function main() {
  addProjectTextInput()
}

startOnWebsiteReady()

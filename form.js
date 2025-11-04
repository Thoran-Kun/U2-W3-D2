const KEY = "memory" // costante per evitare typos

// targettiamo i 2 bottoni
const saveButton = document.getElementById("save")
const resetButton = document.getElementById("reset")

// targetto il docuemnto che scrivo
const textAreaField = document.getElementById("content")

// lavoriamo sul pulsante SALVA
saveButton.addEventListener("click", () => {
  // targetto il contenuto nel campo field e lo metto in una variabile
  const textAreaContent = textAreaField.value
  //  dopo averlo targettato lo salviamo in localStorage
  localStorage.setItem(KEY, textAreaContent)
})

// lavoriamo sugli eventi al click del bottone reset
resetButton.addEventListener("click", () => {
  // faremo cancellare il testo nel campo di input
  textAreaField.value = ""
  //   ora invece faremo cancellare in memoria anche il dato salvato
  localStorage.removeItem(KEY)
})

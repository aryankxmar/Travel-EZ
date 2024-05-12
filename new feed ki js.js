const scriptURL = 'https://script.google.com/macros/s/AKfycbwI0LsHqRRsRB24NcQFeQvXuz0EK4dIrqIJdIjHrBL7AAhBi9mkzMgYXtf99w8I06Yv/exec'

const form = document.forms['feedback form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your feedback is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
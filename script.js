const link = () => {
  const alert = confirm(`\nRedirect to the Dark Web?\n(Recommended to use Tor Browser)`)
  if (alert === true) {window.location.href = 'https://zqktlwi4fecvo6ri.onion/'}
  else if (alert === false) {}
  alert()
}
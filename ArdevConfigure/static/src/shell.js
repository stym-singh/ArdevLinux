var default_shell = document.getElementById('default-shell')

default_shell.addEventListener('change', () => {
  if (default_shell.value == 'bash') {
    document.getElementById('zsh-options').classList.add('d-none')
    document.getElementById('bash-options').classList.remove('d-none')
  } else if (default_shell.value == 'zsh') {
    document.getElementById('bash-options').classList.add('d-none')
    document.getElementById('zsh-options').classList.remove('d-none')
  }
})

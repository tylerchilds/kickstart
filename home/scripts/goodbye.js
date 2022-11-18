let name = 'ty'

export function redo() {
  name = 'ty+'
  console.log(`goodbye ${name}`)
}

export function undo() {
  name = 'ty-'
  console.log(`hello ${name}`)
}

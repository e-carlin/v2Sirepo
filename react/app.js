const e = React.createElement

function header() {
    return e('h1', {}, "Contacts")
}

const rootElement =
      e('div', {className: 'topnav'},
	e('button', {className: 'active'}, 'Source'),
	e('button', {}, 'Lattice'),
	e('button', {}, 'Visualization'),
       )
ReactDOM.render(rootElement, document.getElementById('root'))

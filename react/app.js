function e(type, props, children) {
    return React.createElement(type, props, ...children);
}

function buttons() {
    return ['Source', 'Lattice', 'Visualization'].map((t) => e('button', {}, t));
}

const rootElement =
      e('div', {className: 'topnav'}, buttons())
ReactDOM.render(rootElement, document.getElementById('root'))

const container = document.querySelector('#root');
const linkElementTextNode = createTextNode('resume');
const linkElement = createElementNode('a', linkElementTextNode, { href: '#', class: 'ml-5 text-danger' })
const titleElementNode = createTextNode('salam');
const titleElement = createElementNode('h1', [titleElementNode, linkElement], { class: 'display-4 text-danger text-capitalize' });
const containerElement = createElementNode('div', titleElement, { id: 'container', class: 'container mt-5' })

render(containerElement, container)
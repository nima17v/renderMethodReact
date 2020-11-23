const render = (node, container) => {
    const isObject = checkIsObject(node) && checkIsObject(container)
    isObject && (
        node.type === 'text' ? renderTextNode(node, container) : renderElementNode(node, container)
    )
}
const checkIsObject = (node) => typeof node === 'object'
const renderTextNode = (node, container) => {
    const text = node.props.nodeValue;
    container.innerHTML += text;
}
const renderElementNode = (node, container) => {
    const typeElement = node.type;
    const element = document.createElement(typeElement);
    const isProperty = property => property !== 'children';
    const props = Object.keys(node.props).filter(isProperty);
    for (let prop of props) {
        element.setAttribute(prop, node.props[prop]);
    }
    for (let prop of node.props.children) {
        prop.type === 'text' ? renderTextNode(prop, element) : renderElementNode(prop, element)
    }
    container.appendChild(element);
}

const createTextNode = (nodeValue) => {
    return {
        type: 'text',
        props: {
            nodeValue,
            children: []
        }
    }
}

const createElementNode = (type, children, props) => {
    return {
        type,
        props: {
            children: Array.isArray(children) ? children : [children],
            ...props
        }
    }
}
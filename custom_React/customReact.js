//  step 4
function customRender(reactElement, mainContainer) {
  /*
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  mainContainer.appendChild(domElement);
  */

  // Modified code:
  // In the above code for setting attributes we were repeating code:
  // So we make use of a for loop to set the attributes:
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    // here we did a if check as like in previous versions of react children property used to br inside props
    //  thats why a security check:
    if (reactElement.props[prop] === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.appendChild(domElement);
}

//step 2 // this is the element that we return in the function: and how react see it:
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click Me To Visit Google.com",
};

//step 1
const mainContainer = document.getElementById("root");

//step 3
customRender(reactElement, mainContainer); // (what to inject, where to inject)

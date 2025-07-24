const maincontainer = document.getElementById('myreact');
const reactElement={
  type:'a',
  props:{
    href:'https://google.com',
    target:'_blank',
  },
  children:'click me to visit google '
}
function createElement(maincontainer,reactElement){
const element=document.createElement(reactElement.type);
element.innerHTML=reactElement.children;
for(const prop in reactElement.props){
element.setAttribute([prop],reactElement.props[prop]);
}
maincontainer.appendChild(element);

}
createElement(maincontainer,reactElement);
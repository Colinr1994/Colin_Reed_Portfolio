function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
const domContainer = document.querySelector('#root');
ReactDOM.render(element, domContainer);


// @jsx createElement
// React에서는 자동으로 React.createElement로 선언해주기 때문에 생략되는 것
// 현재는 직접 구현한 createElement 메소드를 사용하므로 line1의 주석을 명시
import { createElement, render, Component } from "./react";

class YourTitle extends Component {
  render() {
    return (
      <p>나는 타이틀이 되고싶다</p>
    );
  }
}

function Title(props) {
  return (
    <div>
      <h2>정말 동작할까?</h2>
      <YourTitle />
      <p>잘 동작하는지 보고 싶다.</p>
    </div>
  );
}

render(<Title />, document.querySelector('#root'));

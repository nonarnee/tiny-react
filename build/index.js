// @jsx createElement
// React에서는 자동으로 React.createElement로 선언해주기 때문에 생략되는 것
// 현재는 직접 구현한 createElement 메소드를 사용하므로 line1의 주석을 명시
import { createElement, render, Component } from "./react";

class YourTitle extends Component {
  render() {
    return createElement("p", null, "\uB098\uB294 \uD0C0\uC774\uD2C0\uC774 \uB418\uACE0\uC2F6\uB2E4");
  }

}

function Title(props) {
  return createElement("div", null, createElement("h2", null, "\uC815\uB9D0 \uB3D9\uC791\uD560\uAE4C?"), createElement(YourTitle, null), createElement("p", null, "\uC798 \uB3D9\uC791\uD558\uB294\uC9C0 \uBCF4\uACE0 \uC2F6\uB2E4."));
}

render(createElement(Title, null), document.querySelector('#root'));
const hooks = [];
let currentComponent = -1;

export class Component { // React.Component 역할

}

export function useState(initValue) {
  const position = currentComponent;

  if (!hooks[position]) { // 최초 호출
    hooks[position] = initValue;
  }

  return [
    hooks[position],
    (nextValue) => {
      hooks[position] = nextValue;
    }
  ];
}

function renderRealDOM(vdom) {
  if(typeof vdom === 'string') { // 마지막 노드
    return document.createTextNode(vdom);
  }

  if(vdom === undefined) return; // 종료 조건

  const $el = document.createElement(vdom.tagName);

  vdom.children.map(renderRealDOM).forEach(node => {
    $el.appendChild(node);
  })
  return $el;
}

// virtual DOM 의 비교는 render 메소드에서 가능하다
export const render = (function() {
  let prevVdom = null;

  return function(nextVdom, container) {
    if(prevVdom === null) {
      prevVdom = nextVdom;
    }

    // diff
    if (prevVdom !== nextVdom) {
      // 생략
    }

    container.appendChild(renderRealDOM(vdom))
  }
})();


// babel은 JSX 구문을 createElement()로 변환해준다
export function createElement(tagName, props, children) {
  // js에서 class, function을 type으로 구분할 수 없다.
  if (typeof tagName === 'function') {
    if (tagName.prototype instanceof Component) { // class 컴포넌트인 경우
      // 실제 React에서는 매번 인스턴스를 만들지 않고 최초 한번 인스턴스를 만든 후 생명주기 사이클을 돌린다
      // class 컴포넌트만 상태를 가질 수 있는 이유이기도 하다
      const instance = new tagName({ ...props, children });
      return instance.render();
    } else {
      currentComponent++; // hooks

      return tagName.apply(null, [props, ...children]);
    }
  }

  return { tagName, props, children };
}

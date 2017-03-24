# React

리액트를 왜 사용해야 할까?

실제 돔에서 처리하면 성능, 효율에서 안좋고 관리가 힘듬

React에서는 Virtual DOM (자바스크립트 객체) 를 이용

값이 업데이트 될때마다 갱신 시 HTML의 요소를 수정해야하고, 변경됬는지 확인도 해야함

React는 완성된 set에 대해 변경점을 찾고 변경된 부분만 수정한다

# ES6 사용

Babel - ES6을 호환 안되는 브라우저에서 호환 되게 하기 위해 사용

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes

# JSX

자바스크립트에서 HTML형식을 그대로 사용 할 수 있다.

XML-like syntax 를 native Javascript로 변경

container element안에 반드시 포함해야한다

jsx 안 js 는 {}로 wrapping

ex) 
1.
 <div>{text}</div>
2.
 <div>{1==1 ? 'True':'False'}</div>
FE Common code snippets
====

공통으로 사용하는 코드 조각을 관리합니다.

여러분의 많은 의견 부탁드립니다!

더 좋은 버전의 코드가 있다면 커밋하여 알려주세요!

이 문서는 자유롭게 수정 가능합니다

:clap:

###코드 설명

|파일명|설명|비고|
|----|-----------|------|
|inheritance.js|간단한 상속 코드 (Nicholas C. Zakas, YUI Library)|- 부모 생성자를 명시적으로 호출해야 한다.<br />- 자식 프로토타입 메서드를 구현하기 전에 상속받아야 한다.|
|browser.js|브라우저 종류, 버전을 검출하는 모듈|-|
|util.js|공통으로 사용하는 유틸리티 메서드 모음|-|
|form.js|form 엘리먼트를 핸들링하는 메서드 모음|-|
|customEvent.js|인스턴스에게 커스텀 이벤트 기능을 추가하는 믹스인 모듈|-|
|type.js|변수 타입 체크 모듈|-|
|object.js|객체 자체를 다루는 모듈 (extend, stamp ...)|-|
|func.js|함수 처리 모듈 (bind ...)|-|
|collection.js|콜렉션 처리 모듈 (forEach, map, reduce ...)|-|
|variable.js|전역변수의 get, set을 지원하는 모듈|-|
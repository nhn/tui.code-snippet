## FE Common code snippets
======================
개발에서 공통으로 사용하는 코드들의 모음
## FE common code snippet
* Common code snippets 이란, **공통으로 사용하는 코드 조각**을 모아둔 것을 정의
* 아래와 같은 종류의 FE common code snippet이 존재하며 지속적인 추가 및 수정이 이루어 짐
* FE에서 배포하는 모든 컴포넌트 및 Application은 **가독성과 중복코드 방지**등을 위해 FE common code snippet을 사용함
* 기본적인 네임스페이스는 **ne.util**을 사용
<br>

|파일명|설명|비고|
|----|-----------|------|
|inheritance.js|간단한 상속 코드 (Nicholas C. Zakas, YUI Library)| - 부모 생성자를 명시적으로 호출해야 한다.<br />- 자식 프로토타입 메서드를 구현하기 전에 상속받아야 한다. |
|browser.js|브라우저 종류, 버전을 검출하는 모듈| |
|form.js|form 엘리먼트의 요소 및 값들을 받아 올 수 있고, 설정할 수 있다. | |
|customEvent.js| 커스텀이벤트 기능을 추가/제거 및 발생시킬수 있게 하는 커스텀이벤트. 믹스인 방법과 내부객체로 저장하여 사용할수 있다. | |
|type.js| 변수의 타입 체크 모듈 | |
|object.js| 객체 자체를 다루는 모듈 (extend, stamp ...) | |
|func.js| 함수 처리 모듈 (bind ...) | |
|collection.js| 콜렉션을 처리할 수 있는 유틸성 함수들의 모음이다. (forEach, map, reduce ...) | |
|enum.js| 임의의 값으로 중복되지 않는 값을 갖는 상수의 목록을 만든다. | -IE8이하를 제외한 모던브라우저에서는 한번 결정된 값은 추후 변경될 수 없다. |
|string.js| decodeHTMLEntity및, encodeHTMLEntity등의 문자열 조작 모듈을 제공한다. | |
|window.js| 윈도우 팝업등의 window객체와 관련된 모듈들을 제공한다. | -IE11에서 POST를 사용해 팝업에 값을 전달할 땐 꼭 postDataBridgeUrl을 설정해야 한다<br> - 다른 도메인을 팝업으로 띄울 경우 보안 문제로 팝업 컨트롤 기능을 사용할 수 없다. |
|defineClass.js| 클래스를 정의 및 상속할수 있는 모듈들을 제공한다. | |
|hashMap.js| 해시맵 기능을 제공한다. | |


## Documentation
* **Tutorial** - [준비중]
* **CI** - http://fe.nhnent.com:8080/jenkins/job/share-code-snippet/

## Code-Snippet 사용법
* repository: https://github.nhnent.com/FE/Share-CodeSnippet
* Common code snippets은 빌드된 파일을 전체로 사용할수 있고
* master branch에서 필요한 코드만 복사하여 사용가능
* Common code snippets으로 사용하는 파일 명은 common.js를 권장
* 부분적으로 사용시엔 **의존성을 확인**하여 추출하여 사용
* FE개발팀 Component와 병행사용시, **FE Component의 core**버전과 full version 사용을 권장

## Download/Install
* Bower: `bower install "git+http://3c672057a1ac16c4e6f1baaba73e24d5270ef453:x-oauth-basic@github.nhnent.com/fe/share-code-snippet.git#tag"`
* Download: https://github.nhnent.com/fe/share-code-snippet


## History
| Version | Description | Date | Developer |
| ---- | ---- | ---- | ---- |
| 0.0.1 | 최초개발 | 2014.09 | FE개발팀 |

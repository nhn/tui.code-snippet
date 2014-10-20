/**
 * 니콜라스 자카스 클래스 상속
 * YUI 라이브러리 내 상속 코드로 사용되고 있다고 함.
 */

function object(obj) {
    function F() {}
    F.prototype = obj;
    return new F;
}

function inherit(subType, superType) {
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

/**
 * 사용코드
 */

/**
 * Animal Class
 */
function Animal(leg) {
    this.leg = leg;
}
Animal.prototype.walk = function() {};


/**
 * Person Class
 */
function Person(leg, name) {
    Animal.call(this, leg); // 부모 생성자를 호출
    this.name = name;
}

/**
 * 상속!
 * 주의점은 자식 클래스의 prototype 메서드를 정의하기 전에 호출해야 한다.
 */
inherit(Person, Animal);

/**
 * @return {String}
 */
Person.prototype.sayName = function() {
    return this.name;
};


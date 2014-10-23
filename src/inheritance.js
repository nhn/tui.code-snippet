/**
 * @fileoverview 간단한 상속 시뮬레이션
 * @author FE
 */

(function(ne) {
    'use strict';
    if (!ne) {
        ne = window.ne = {};
    }

    /**
     * 인자를 프로토타입으로 사용하는 객체를 만드는 메서드
     * @param {(Object|Function)} obj
     * @return {Object}
     */
    ne.createObject = function(obj) {
        function F() {}
        F.prototype = obj;
        return new F;
    };

    /**
     * 니콜라스 자카스 클래스 상속
     *
     * YUI 라이브러리 내 상속 코드로 사용되고 있다고 함.
     *
     * *반드시 자식 클래스의 prototype 메서드를 정의하기 전에 호출해야 한다.*
     *
     * @param {Function} subType 자식 클래스 생성자
     * @param {Function} superType 부모 클래스 생성자
     * @examples
     * //Animal Class
     * function Animal(leg) {
     *     this.leg = leg;
     * }
     * Animal.prototype.walk = function() {};
     *
     * // Person Class
     * function Person(leg, name) {
     *     Animal.call(this, leg); // 부모 생성자를 호출
     *     this.name = name;
     * }
     *
     * // !주의
     * inherit(Person, Animal);
     *
     * Person.prototype.sayName = function() {
     *     return this.name;
     * };
     *
     */
    ne.inherit = function(subType, superType) {
        var prototype = ne.createObject(superType.prototype);
        prototype.constructor = subType;
        subType.prototype = prototype;
    };

})(window.ne);

describe('module:BetterMap', function() {
    'use strict';

    var map;

    beforeEach(function() {
        map = new ne.util.BetterMap();
    });

    describe('setObject()', function() {
        it('sets the each key/value pair in the object to the map.', function() {
            map.setObject({
                'name': 'kim',
                'company': 'apple'
            });
            expect(map.get('name')).toBe('kim');
            expect(map.get('company')).toBe('apple');
        });
    });

    describe('deleteByKeys()', function() {
        it('removes the elements associated to the each keys in the array', function() {
            map.set('1', 'one');
            map.set(1, 'number one');
            map.set(null, 'null');

            expect(map.has('1')).toBe(true);
            expect(map.has(1)).toBe(true);
            expect(map.has(null)).toBe(true);

            map.deleteByKeys(['1', 1]);

            expect(map.has('1')).toBe(false);
            expect(map.has(1)).toBe(false);
            expect(map.has(null)).toBe(true);
        });
    });

    describe('merge()', function() {
        it('sets all of the key-value pairs in the specified map to this map', function() {
            var anotherMap = new ne.util.Map();

            map.set(1, 'one');
            map.set(2, 'two');

            anotherMap.set(2, 'second');
            anotherMap.set(3, 'third');

            map.merge(anotherMap);

            expect(map.get(1)).toBe('one');
            expect(map.get(2)).toBe('second');
            expect(map.get(3)).toBe('third');
        });
    });

    describe('filter()', function() {
        it('returns new BetterMap of all key-value pairs that pass a truth test', function() {
            var filtered;

            map.set(1, 1);
            map.set(2, 'two');
            map.set(3, 3);

            filtered = map.filter(function(value, key) {
                return value === key;
            });

            expect(filtered.get(1)).toBe(1);
            expect(filtered.get(2)).toBeUndefined();
            expect(filtered.get(3)).toBe(3);
            expect(filtered.size).toBe(2);
        });
    });
});

// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex! when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat! when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return "Hello, !" when executed', function () {
        expect(sayHello("")).toBe("Hello, !");
    });
    it('should return "Hello, 2.3!" when executed', function () {
        expect(sayHello(2.3)).toBe("Hello, 2.3!");
    });
    it('should return "Hello, 5!" when executed', function () {
        expect(sayHello("5")).toBe("Hello, 5!");
    });
    it('should return "Hello, World!" when executed', function () {
        expect(sayHello(null)).toBe("Hello, null!");
    });
});
describe('isFive', function (){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return boolean',function () {
        expect(isFive(5)).toBeTruthy();
    });
    it('should return true when executed', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed the value "5"', function () {
        expect(isFive("5")).toBe(true);
    });
});
describe('isEven', function (){
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return boolean',function () {
        expect(isEven(2)).toBeTruthy();
    });
    it('should return true when passed the value 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed the value -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed the value 5', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed the string "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed the value 8', function () {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when passed Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return true when passed a boolean value', function () {
        expect(isEven(true)).toBe(false);
    });
});
describe('isVowel', function (){
    it('should return boolean',function () {
        expect(isVowel).toBeTruthy();
    });
    it('should return true when passed the value "a"', function () {
        expect(isVowel('a')).toBe(true);
    });
    it('should return true when passed the value "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed the value "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should returns false when passed the number 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed true or false', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed the string "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should returns false when passed an empty string', function () {
        expect(isVowel('')).toBe(false);
    });
});
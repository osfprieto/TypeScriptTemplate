import { Foo } from "./Foo";

test('SimpleTest', function() {
    expect(true).toBe(true);
});

test('ActualTest', function() {
    // Arrange
    const spy = jest.spyOn(console, 'log');
    
    // Act
    new Foo().bar();

    // Validate
    expect(spy).toBeCalledWith('foo-bar');
});
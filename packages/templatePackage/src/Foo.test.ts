import { Foo } from "./Foo";

test('bar logs its message', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});

    new Foo().bar();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('foo-bar');
});
import { main } from "./index";

test('main runs the example', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});

    main();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('foo-bar');
});

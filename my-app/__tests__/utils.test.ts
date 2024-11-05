import { add } from '../lib/utils';

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test("this my fail", () => {
    expect(add(1, 2)).toBe(4);
});

test("this one also must failed", () => {
    expect(add(1, 2)).toBe(5);
});

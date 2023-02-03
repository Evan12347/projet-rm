function sum(a, b) {
    return a + b;
}
function testEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('email is valid', () => {
    expect(testEmail('bla@bla')).toBe(false);
    expect(testEmail('RickSanchez@gmail.com')).toBe(true);
});
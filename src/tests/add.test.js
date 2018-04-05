const add = (a, b) => a+b;
const generateMeeting = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('should create a meeting', () => {
    const result = generateMeeting('Tenzing');
    expect(result).toBe('Hello Tenzing!');
});
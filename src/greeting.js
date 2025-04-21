export const greeting = "Hello, Odinite!";
// export const greeting = "Hello, Odinite!;

export function component() {
    const element = document.createElement('div');
    element.innerHTML = "Hello webpack";
    return element;
}
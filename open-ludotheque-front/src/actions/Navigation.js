export const MENU_OPEN = 'MENU_OPEN';
export const MENU_CLOSE = 'MENU_CLOSE';

export function displayMenu() {
    return { type: MENU_OPEN}
}

export function closeMenu() {
    return { type: MENU_CLOSE}
}
export const index = () => '/';
export const dashboard = () => '/dashboard';

export const feedback = () => `${dashboard()}/feedback`;

export const markers = () => `${dashboard()}/markers`;
export const wifi = () => `${markers()}/wifi`;
export const toilets = () => `${markers()}/toilets`;
export const sockets = () => `${markers()}/sockets`;

export const callback = () => '/callback';

import Routing from './routing';

export const index = () => '/';
export const dashboard = () => '/dashboard';
export const feedback = () => `${dashboard()}/feedback`;
export const markers = () => `${dashboard()}/markers`;
export const callback = () => '/callback';

export default Routing;

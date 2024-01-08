export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/2023-11-24_f8lK3bu2.mjs').then(n => n._);

export { page };

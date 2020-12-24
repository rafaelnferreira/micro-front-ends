

export const loadApps = () => fetch('/api/v1/front-end-apps').then(r => r.json());
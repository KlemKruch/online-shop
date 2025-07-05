export const getSessions = () => fetch('http://localhost:3000/sessions').then((loadedSession) => loadedSession.json());

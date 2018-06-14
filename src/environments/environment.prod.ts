export const environment = {
  production: true,
  oauth: {
    authUrl: 'http://localhost:8080/oauth/authorize',
    profileUrl: 'http://localhost:8080/api/me',
    client_id: 'insecure',
    scope: ['scope1'],
    response_type: 'token',
    redirectUri: 'http://localhost:4200/callback'
  },
  apiBase: 'http://localhost:8080'
};

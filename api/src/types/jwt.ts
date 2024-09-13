export enum EKeyJwt {
  'signin',
  'signup',
  'forgot',
}

export type JwtPayLoad = {
  id: number;
  key: EKeyJwt;
};

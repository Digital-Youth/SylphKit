declare module '*.js' {
  import { ReactElement } from 'react';
  const content: { [key: string]: { path: ReactElement } };
  export default content;
}

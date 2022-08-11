import { Connect, connect as originalConnect } from 'react-redux';
import { ProxyContext } from './contexts';

const slice = Array.prototype.slice;

export const toArgs = <T = any[]>(args: IArguments, start?: number): T =>
  slice.call(args, start) as unknown as T;
export const connect: Connect = function () {
  const args = toArgs<Parameters<Connect>>(arguments);
  (args[3] ||= {}).context = ProxyContext;

  return originalConnect.apply(null, args);
};

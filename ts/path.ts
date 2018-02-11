// Type information only.
import * as _path from 'path';

import * as posixPath from './posix_path';
export * from './posix_path';

export const posix: any = posixPath;
// XXX: Typing hack: Exported so the type of this module matches NodeJS's path.
export const win32: any = posixPath;

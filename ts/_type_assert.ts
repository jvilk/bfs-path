// Asserts that our path matches Node's path. Otherwise, compilation fails.

import * as path from 'path';
import * as path2 from './path';

const p: typeof path = path2;
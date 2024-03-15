#!/usr/bin/env node

import { brainGameStart } from '../src/index.js';
import { str, brainGCD, c } from '../src/games/gcd.js';

brainGameStart(c, str, brainGCD);

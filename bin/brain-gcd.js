#!/usr/bin/env node

import { brainGameStart } from '../src/index.js';
import { str, brainGCD, a } from '../src/games/gcd.js';

brainGameStart(a, str, brainGCD);

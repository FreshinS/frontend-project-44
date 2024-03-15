#!/usr/bin/env node

import { brainGameStart } from '../src/index.js';
import { str, brainPrime, a } from '../src/games/prime.js';

brainGameStart(a, str, brainPrime);

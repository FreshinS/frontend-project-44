#!/usr/bin/env node
import { brainGameStart } from '../src/index.js';
import { str, brainEven, a } from '../src/games/even.js';

brainGameStart(a, str, brainEven);
#!/usr/bin/env node

import { brainGameStart } from '../src/index.js';
import { str, brainProgression, a } from '../src/games/progression.js';

brainGameStart(a, str, brainProgression);

/* global hexo */
'use strict';

const assign = require('object-assign');

const path = require('path');
const fs = require('hexo-fs');

let config = hexo.config.spell = assign({

    },
    hexo.config.spell);

hexo.extend.generator.register('spell', require('./lib/spell'));
/**
 * @license
 * Copyright (c) TechAurelian {@link https://techaurelian.com}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { addMimageShortcode } = require('./src/mimage-shortcode.js');

// /**
//  * Validates the provided option by throwing an error if it is not defined.
//  * 
//  * @param {object} options The options object.
//  * @param {string} name The name of the option.
//  */
// function validateOption(options, name) {
//   if (!options[name]) throw new Error(`eleventy-mapped-images requires a ${name} option.`);
// }

module.exports = function (eleventyConfig, options = {}) {
  // Validate options
  // validateOption(options, 'localImagesUrl');
  // validateOption(options, 'externalImagesUrl');
  // validateOption(options, 'localImageMap');
  // validateOption(options, 'externalImageMap');

  // Add the mimage shortcode
  addMimageShortcode(eleventyConfig, options);
};
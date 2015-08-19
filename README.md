##Goal
  Use Highcharts as the base library. All the changes and enhancements should be independent and be written as plugins.  Upgrading the library version should be only a config change (bumping up version number in some configuration file).

  I want to come up with a build structure and process so to suit the above requirement.

  So, the goals of this new build system would be:

 * Separate library code from user code
 * Make it easy to update library code
 * Ability to *watch* over changes made and have *live reload* facility - developers changing *source* code can directly see their changes on the browser - this will improve productivity.  Today they either work directly on the build, in which case they have to remember to copy their changes back to source or they work on the source and run then *build* - this build takes time.
 * Establish a clear pattern for the way plugins must be written
 * Generate documentation easily
 * Make it easy to add test cases
 * Consume the output of this module via a CDN.  Also, allow plugins developed to be accesible as individual node modules

## Webpack
  This repo is built using webpack.  That means all code has to be written as compatible node modules as well.  This gives us flexibility to render on the server side as well.

###Running the server
 1. Run **gulp webpack** to build all assets
 1. **gulp dev-server ** can be used to live-reload all resources
 1. Other tasks can be found in the gulpfile.js file

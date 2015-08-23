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

## What this repo will not do
  The examples page is not integrated with this repo.  That will be part of a separate repo.

## Webpack
  This repo is built using webpack.  That means all code has to be written as compatible node modules as well.  This gives us flexibility to render on the server side as well.

** Handling non-conformant modules **
  If certain plugins depend upon other libraries which are not node modules,  we should wrap them in a node module or see if there is webpack support for handling non-node modules.

** Ways of extending Highcharts **
 * Either add it to the Highcharts prototype
 * Or write a wrapper function which does a certain set of things and export that wrapper
In this repo, both these methods will be followed.  Adding to the prototype is not a 'opt-in' - the very fact that you are using a flavored version of Highcharts means they will come by default.

###Running the server
 1. Run **gulp webpack** to build all assets
 1. **gulp dev-server ** can be used to live-reload all resources
 1. Other tasks can be found in the gulpfile.js file

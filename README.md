# deno-oak-server

Server template for deno

## Installing Deno

Instructions for installing Deno can be found [here](https://deno.land/#installation)

## Installing Denon (optional)

Denon is the Deno equivalent to nodemon. Denon installation instructions [here](https://deno.land/x/denon@2.4.5). If you have problems with Denon after a Deno upgrade, I recommend a reinstallation of Denon as it fixed the issue for me.

## Common Problems

Trouble using Deno with Bash or zshrc? Add PATH exports to your .bashrc or .zshrc file. See [here](https://stackoverflow.com/questions/62057786/zsh-command-not-found-denon-even-after-installing-denon/62057787#62057787)

Likewise for Denon, see [here](https://github.com/denoland/deno/issues/6239#issuecomment-644940111)

## Starting the application

Start the application from the root directory with Deno using `deno run --allow-net http.ts`

Start the application from the root directory with Denon using `denon run --allow-net http.ts`

## Adding methods

Adding functions for handling various aspects of the server such as getting what you need from the database (ORMs for example) belong in the methods folder.

## Adding middleware

Middleware such as loggers, timers, error handlers, setting headers, etc belong in the middleware folder.

## Adding routes

Routes belong in routes.ts in the api folder. An example route has been provided, but more complex examples are available [here](https://deno.land/x/oak@v6.4.0)

## deps.ts and dev_deps.ts

Dependencies for the regular project belong in deps.ts. Dependencies used only during development (such as testing libraries) belong in dev_deps.ts.

## http.test.ts

Example test of the /route data and response returning correctly. If you don't correctly close the server with AbortController, your tests will hang.

## Recommended Resources

- [Level Up Tutorials](https://www.leveluptutorials.com/tutorials/deno-101-for-web-developers) - The project structure here was learned through this tutorial, and there are many more tutorials on Level Up Tuts. Highly recommend purchasing a Pro subscription!
- [Oak Documentation](https://deno.land/x/oak@v6.4.1) - The documentation for oak includes middleware such as the logger and timer added to this repository. Closing the server was particularly helpful in writing the server test, and it includes middleware for logger and timing.
- [Deno Documentation](https://deno.land/manual@v1.6.2/examples/manage_dependencies) - The deps.ts and dev_deps.ts approach comes from this section.

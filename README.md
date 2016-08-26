# Nightwatch-Cucumber Framework

To do an e2e(End to End) test of a non-angular application we can make use of this 
Nightwatch-Cucumber Framework, which will support both angular and non-angular applications.

# Prerequisites

- Node version 4.x or higher 
- NPM version 3.x or higher
- Cucumber 0.10.x or higher
- Nightwatch 0.8.x or higher
- Nightwatch-Cucumber 2.1.x or higher
- Selenium-Server 2.53.x or higher
- Chromedriver 2.21.x or higher

For upgrading NPM to version 3.x on Windows, it is recommended to use this NPM
package: 
[NPM Windows Upgrade](https://www.npmjs.com/package/npm-windows-upgrade)

# Setup Steps

Checkout the fresh code on the physical machine, do the following:

```
$ npm install
```

This will do the following:
- Install build-time dependencies (`npm install`).

Once it is done, now the basic setup is done to run a sample test.

Now we have two options to run this sample test:

a. Using Nightwatch as runner, to do this we do the following:

```
$ nightwatch
If Nightwatch is installed globally using : $ npm install nightwatch -g

$ node_modules/.bin/nightwatch
If Nightwatch is installed locally : $ npm install nightwatch
```

On running the above command we can see the sample test running, which is
actually the nightwatch as runner.

b. Using Cucumber as runner, to do this we do the following:

```
$ cucumberjs
If Cucumber is installed globally using : $ npm install cucumber -g

$ node_modules/.bin/cucumberjs
If Cucumber is installed locally : $ npm install cucumber
```


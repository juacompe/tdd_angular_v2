TDD with AngularJS version 2
====

I have used <https://github.com/juacompe/tdd_angular> as a starting point to demostrate TDD. Recently I learned about [Karma](http://karma-runner.github.io/0.10/index.html) (Thanks to [Amp](https://www.facebook.com/amp.tanawat)!) and decided to create a new bare template for AngularJS project using Karma as a test runner.

NodeJS Installation
----

###OSX
1. Install Homebrew at <http://mxcl.github.com/homebrew/>
1. Install node via homebrew `brew install node`
1. Go to the directory where you cloned the repository
1. npm install
1. add `/usr/local/share/npm/bin` to `$PATH` variable in `~/.bash_profile`. If the line does not exist, put in this: `export PATH=$PATH:/usr/local/share/npm/bin`

###Ubuntu

```
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
```

###Windows
1. Download Install nodejs from <http://nodejs.org/download/>

reference: <https://github.com/huskycode/foresee#nodejs-installation-for-dev>

Running Test
----
```
grunt test
```


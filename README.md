TDD with AngularJS version 2
====

I have used <https://github.com/juacompe/tdd_angular> as a starting point to demostrate TDD. Recently I learned about [Karma](http://karma-runner.github.io/0.10/index.html) (Thanks to [Amp](https://www.facebook.com/amp.tanawat)!) and decided to create a new bare template for AngularJS project using Karma as a test runner.

Environment setup
----

### Step 1) Install Node Version Manager

```
sudo apt-get install nvm
```

----
Window users, download and install from <http://nodejs.org/>

```
npm install nvm
```
----

### Step 2) Install Node Version Manager v0.10.13

Use `nvm ls` to check which version of `nvm` you are using. If you don't have `v0.10.13`, then install it:

```
nvm install v0.10.13
```

In case have `v0.10.13` installed but it is not your current version, run `nvm use` to switch to that version:

```
nvm use v0.10.13
```

### Step 3) Install karma@canary

```
npm install -g karma@canary
```

Running Test
----
```
karma start
```


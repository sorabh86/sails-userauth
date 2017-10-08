# Overview of Application
User Authorization Application have both fronthand & backhand. It is running on [`Sails frameworks`](http://sailsjs.com) over the backend Node Server. This app is taking a hybrid approach with mix of front & backhand logic. 

## Things Within
* Form validation (front & backhand)
* Custom backend API
* Angular-Sails hybrid view
* [Foundation Zurb](https://foundation.zurb.com/)
* Toastr messaging module
* [Node Machine Pack](http://node-machine.org/)
  * passwords (.checkPassword() | .encriptPassword())
  ```
  $ npm install machinepack-passwords --save
  var Passwords = require('machinepack-passwords');
  ```
  * Gravatar (.getImageUrl())
  ```
  $ npm install machinepack-gravatar --save
  var Gravatar = require('machinepack-gravatar');
  ```
* [angular-toastr](https://github.com/Foxandxss/angular-toastr)
```
$ bower install angular-toastr

angular.module('app', ['ngAnimate', 'toastr'])
.controller('foo', function($scope, toastr) {
  toastr.success('Hello world!', 'Toastr fun!');
  // toastr.info()
  // toastr.error()
  // toastr.warning()
});
```

## Important Command for Sails Framework
install

```
$ npm install sails -g
```
Create your app
```
$ sails new test-project
```
Running Application `localhost:1337`
```
$ sails lift
```
Generate sails api
```
$ sails generate api user
```


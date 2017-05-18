// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('todo', ['ionic', 'todo.controllers', 'todo.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    
	hbecho.echo(
        'Plugin is ready!',
        function(msg) {
            document
              .getElementById('deviceready')
              .querySelector('.received')
              .innerHTML = msg;
        },
        function(err) {
            document
              .getElementById('deviceready')
              .innerHTML = '<p class="event received">' + err + '</p>';
        }
    );
	
	hbecho.echojs(
        'Hello from Plugin!!',
        function(msg) {
            document.getElementsByTagName('h1')[0].innerHTML = msg;
        },
        function(err) {
            document.getElementsByTagName('h1')[0].innerHTML = err;
        }
    );
	
	/* ComScore SDK v5.X start - used for android */
	
	ComScorePlugin.initClient("24608202", "82a44e8c84c174abac3cfdbcb2050ced");
	
	$ionicPlatform.on('pause', function() {
	    ComScorePlugin.notifyExitForeground();
	});

	$ionicPlatform.on('resume', function() {
        ComScorePlugin.notifyEnterForeground();
	});

	/* ComScore SDK v5.X end */
	
	/* TODO: ComScore SDK before v5.X start - retained for ios */
	
//	ComScorePlugin.setCustomerData("24608202", "82a44e8c84c174abac3cfdbcb2050ced");
//	//ComScorePlugin.setAppName("testApp01");
//	//ComScorePlugin.autoUpdateForeground("5");
//	//ComScorePlugin.autoUpdateBackground("5");
//
//	$ionicPlatform.on('pause', function() {
//	    ComScorePlugin.onExitForeground();
//	});
//
//	$ionicPlatform.on('resume', function() {
//        ComScorePlugin.onEnterForeground();
//  });
//
//	ComScorePlugin.start();
	
	/* ComScore SDK before v5.X end */
	
	
	
	
  });
})

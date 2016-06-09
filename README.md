cmelo-angular-sticky
==============

An AngularJS directive for sticky headers.
[Demo](http://rawgit.com/cmelo/angular-sticky/master/demo/index.html)

No jQuery or other libraries needed.


Usage
-------------

Install with Bower
```
# npm
npm install cmelo-angular-sticky
# bower
bower install cmelo-angular-sticky
```

Include JS file
```html
<head>
	<!-- angular -->
	<script tpye="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.6/angular.js"></script>
	<!-- cmelo-angular-sticky JS file -->
	<script tpye="text/javascript" src="//rawgit.com/cmelo/angular-sticky/master/cmelo-sticky.js"></script>
</head>
```

Add module dependency
```js
angular.module('myModule', ['cmelo.angularSticky']);
```

Add [cmelo-sticky] directive to the container element with overflow: auto
```html
<body cmelo-sticky>
	Content
</body>
```
or
```html
<style type="text/css">
	[cmelo-sticky] {overflow: auto;}
</style>
<div cmelo-sticky>
	Content
</div>
```

Add [cmelo-sticky-top] to the element that you with to stick to the top
```html
<header cmelo-sticky-top>
	Header sticked to the top
</header>
<header cmelo-sticky-top="30">
	Header sticked 30px from the top
</header>
```

Works for thead too
```html
<table>
	<thead cmelo-sticky-top>
		<tr></tr>
	</thead>
	<tbody>
		<tr></tr>
	</tbody>
</table>
```

Stop / Clear sticky with empty element
```html
<hr cmelo-sticky-top>
or
<div cmelo-sticky-top></div>
<!-- must have {display: block;} property -->
```

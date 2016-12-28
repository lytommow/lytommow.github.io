
// “部门也是以模块形式存在的”

angular.module('Ctrls', [])

.controller('DemoController', ['$scope', function ($scope) {

	console.log('我是入职的第一名员工，我属于控制器');
}])
// 导航
.controller('NavsController', ['$scope', '$http', function ($scope, $http) {

	// 通常情况左侧导航的数据会来自于后端
	// $http({
	// 	url: '',
	// }).success(function (info) {
	// 	$scope.navs = info;
	// });

	// 假如导航是固定不变的就没有必要再发请求了
	// 可用数组进行模拟

	var navs = [
		{text: '今日一刻', link: '#/today', icon: 'icon-home'},
		{text: '往期内容', link: '#/older', icon: 'icon-file-empty'},
		{text: '热门作者', link: '#/hot', icon: 'icon-pencil'},
		{text: '栏目浏览', link: '#/view', icon: 'icon-menu'},
		{text: '我的喜欢', link: '#/like', icon: 'icon-heart'},
		{text: '设置', link: '#/settings', icon: 'icon-cog'},
	];

	// 模型数据
	$scope.navs = navs;

}])

// 今日一刻
.controller('TodayCtrl', ['$scope', '$http', function ($scope, $http) {

	// 获得数据
	$http({
		url: './api/today.php'
	}).success(function (info) {
		console.log(info);
		// 将获得的数据放到模型上
		$scope.posts = info.posts;
	});

}])

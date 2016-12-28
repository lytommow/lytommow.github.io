
// “部门也是以模块形式存在的”

angular.module('Ctrls', [])

.controller('DemoController', ['$scope', function ($scope) {

}])
// 导航
.controller('NavsController', ['$scope', '$http', function ($scope, $http) {


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
.controller('TodayCtrl', ['$scope', '$http', '$rootScope','$filter', function ($scope, $http, $rootScope,$filter) {

		$rootScope.loaded=false;

		$rootScope.title='今日一刻';

		$rootScope.current=0;

	//	获得日期格式
		var day=new Date;
		$scope.day=$filter('date')(day,'yyyy-MM-dd');

	// 获得数据
	$http({
		url: 'api/today.php',
		params:{day:$scope.day}
	}).success(function (info) {

		// 将获得的数据放到模型上
		$scope.posts = info.posts;

		$scope.date = info.date;

		// 成功获取数据
		$rootScope.loaded = true;
	});

}])
//往期内容
.controller('OlderCtrl',['$scope','$http','$rootScope', function ($scope,$http,$rootScope) {
		$rootScope.loaded=false;

		$rootScope.title='往期内容';
		//改变索引值
		$rootScope.current=1;

		//改变日期
		$scope.day= -1;

		$http({
			url:'api/older.php',
			params:{day:$scope.day}
		}).success(function (info) {

			$scope.posts=info.result.posts;

			$scope.date=info.result.date;

			$scope.day=info.day;

			$rootScope.loaded=true;
		})
	}])
//热门作者
.controller('HotController',['$scope','$http','$rootScope', function ($scope,$http,$rootScope) {

		$rootScope.title='热门作者';

		$rootScope.current=2;

		$rootScope.loaded=false;

		$http({
			url:'api/hot.php'
		}).success(function (info) {

			$scope.rec=info.rec;

			$scope.all=info.all;

			$rootScope.loaded=true;

		})
	}])
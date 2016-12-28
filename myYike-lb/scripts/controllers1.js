
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

//今日一刻
	.controller('TodayCtrl',['$scope','$http','$rootScope','$fliter', function ($scope, $http, $rootScope,$fliter) {
		//首先将加载状态改为false
		$rootScope.loaded=false;
		//将下标改为0
		$rootScope.current=0;
		//将标题改成今日一刻
		$rootScope.title='今日一刻';
		var day=new Date;
		$scope.day=$fliter('date')(day,'yyyy-MM-dd');

		$http({
			url:'api/today.php',
			params:{day:$scope.day}
		}).success(function (info) {
			$scope.posts=info.posts;
			$rootScope.loaded=true;
		})
	}])
//往期内容
	.controller('OlderCtrl',['$scope','$http','$rootScope', function ($scope, $http, $rootScope) {
		$rootScope.loaded=false;
		$rootScope.title='往期内容';
		$rootScope.current=1;
		$http({
			url:'api/older.php',
			params:{day:day}
		}).success(function (info) {
			$scope.posts=info.result.posts;
			$scope.date=info.result.date;
			$rootScope.loaded=true;
		})
	}])
//热门作者
.controller('HotCtrl',['$scope','$http','$rootScope', function ($scope, $http, $rootScope) {
		$rootScope.loaded=false;
		$rootScope.title='热门作者';
		$rootScope.current=2;
		$http({
			url:'api/hot.php'
		}).success(function (info) {
			$scope.posts=info.posts;
			$rootScope.loaded=true;
		})
	}])
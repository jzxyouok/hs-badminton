;(function () {
  app.service('API',function ($http) {
    
    
    /**
     * 获取可以预约的时间段
     * @param  {Function} callback 成功回调
     * @return none
     */
    this.getAvailableTime=function(callback){
      _execute("getSignUpTimes",{},callback)
    }

    /**
     * 预订活动场馆
     * @param  {object}   params   参数
     * @param  {Function} callback 回调
     * @return none
     */
    this.book=function(params,callback){
      _execute("submitSignUp",params,callback);
    }

    /**
     * 签到
     * @param  {object}   params   报名员工的员工号码
     * @param  {Function} callback 回调
     * @return none
     */
    this.sign=function(params,callback){
      _execute("submitSignIn",params,callback);
    }

    /**
     * 报名结果查询
     * @param  {object}   userId:报名的员工号（必填）
     * @param  {Function} callback 回调
     * @return none
     */
    this.queryResult=function(params,callback){
      _execute("searchSignUp",params,callback);
    }

    /**
     * 活动人员名单查询
     * @param  {object}   placeNo:场地编号（1为1号场地，2为2号场地，3为3号场地，4为4号场地）必填
     * @param  {Function} callback 回调
     * @return none
     */
    this.getActivitieUsers=function(params,callback){
      _execute("searchSignUp",params,callback);
    }

    /**
     * 取消报名
     * @param  {object}   userId:报名的员工号（必填）
     * @param  {Function} callback 回调
     * @return none
     */
    this.cancelSignUp=function(params,callback){
      _execute("cancelSignUp",params,callback);
    }


    var prefix = "http://192.168.46.19:8080/client/";
    function _execute(func,params,callback){
      $http({
        method:'GET',
        url:prefix+func+".do",
        params:angular.extend(params,{
          authUserId:14717
        })
      }).success(callback);
    }
  })
})();
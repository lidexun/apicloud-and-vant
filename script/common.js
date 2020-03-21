(function (window) {
   /*二次封装api方法*/
   var t = {
     setRefreshHeaderInfo:function (callback,loadingImg,bgColor,textColor,textDown,textUp,showTime) {
     api.setRefreshHeaderInfo({
       visible: true,
       loadingImg: loadingImg || '',
       bgColor: bgColor || 'rgba(0,0,0,0)',
       textColor: textColor || '#fff',
       textDown: textDown || '下拉刷新',
       textUp: textUp || '松开刷新',
       showTime: showTime || true,
     }, function(ret, err) {
        callback && callback(ret,err)
     });
   },
   refreshHeaderLoadDone:function (callback) {
     setTimeout(function() {
       api.refreshHeaderLoadDone();
       callback && callback();
     },300)
   },
   };
   t.toast = function (msg) {
        api.toast({
            msg: msg,
            duration: 2000,
            location: 'middle',
            global: false
        });
    };
   window.iGlobal = t;
})(window)


var model = {
    findAll:function (_class,callback,errcallback) {
      var model = api.require('model');
      model.findAll({
          class: _class,
      }, function(ret, err) {
          if (ret) {
              callback && callback(ret)
          } else {
              iGlobal.toast(JSON.stringify(err))
              errcallback && errcallback(err);
          }
      });
    }
}

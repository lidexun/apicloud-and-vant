(function(window) {
    var s = {
        /*申请权限*/
        requestPermission: function(list, callback) {
            // camera               //相机/拍照/录像
            // contacts             //写入/读取通讯录
            // microphone           //麦克风/录制音频
            // photos               //相册/本地存储。Android上等同storage权限
            // location             //定位
            // locationAlways       //后台定位，只支持iOS
            // notification         //状态栏通知
            // calendar             //日历读写，只支持Android
            // phone                //直接拨打电话/获取手机号码、IMEI（设备标识），只支持Android
            // sensor               //传感器，只支持Android
            // sms                  //后台发送短信，只支持Android
            // storage              //存储空间，读取相册，多媒体，本地存储相关，只支持Android
            api.requestPermission({
                list: list,
                code: 1
            }, function(ret, err) {
                callback && callback(ret, err)
            });
        },
        hasPermission: function(list) {
            var resultList = api.hasPermission({
                list: list
            });
            return resultList;
        },
        camera: function(callback) {
            var list = ['camera'];
            this.requestPermission(list, function(ret, err) {
                callback && callback(ret, err);
            })
        }
    }
    window.iSystem = s;
})(window)

var app = getApp();
var mta = require('../../../common/lib/mta.js');
Page({
    data: {
        showLog: false,
        year: null,
        version: '0.0.1',
        versionType: '开发版',
        logs: null
    },
    onLoad: function(options) {
        mta.Page.init();
        var that = this;
        wx.request({
            url: app.globalData.getLogsUrl,
            data: {},
            method: 'GET',
            success: function(res) {
                that.setData({
                    logs: res.data
                })
            }
        })
        that.setData({
            year: new Date().getFullYear()
        })
    },
    toggleLog: function() {
        var that = this
        this.setData({
            showLog: !that.data.showLog
        })
    }
})
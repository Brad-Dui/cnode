const computedTime = function (old) {
    //待优化
    let dataTime = new Date(old).getTime();
    let nowTime = new Date().getTime();
    let date = nowTime - dataTime;
    if (date / 1_000 < 60) {
        return Math.floor(date / 1_000) + "秒";
    } else if (date / 60_000 < 60) {
        return Math.floor(date / 60_000) + "分钟";
    } else if (date / 3600_000 < 24) {
        return Math.floor(date / 3_600_000) + "小时";
    } else if (date / 86_400_000 < 30) {
        return Math.floor(date / 86_400_000) + "天";
    } else if (date / 2_626_560_000 < 12) {
        return Math.floor(date / 2_626_560_000) + "个月";
    } else {
        return Math.floor(date / 31_536_000_000) + "年";
    }
}
export { computedTime }
// 定义元素对象变量
var Day;
var Minute;
var Second;
var mia;
// 页面加载事件
window.onload = function () {
    Day = document.querySelectorAll(".sj>div>span")[0];
    // console.log(Day);
    Minute = document.querySelectorAll(".sj>div>span")[2];
    // console.log(Minute);
    Second = document.querySelectorAll(".sj>div>span")[4];
    // console.log(Second);
    mia = document.querySelectorAll(".sj>div>span")[6];
    // console.log(mia);
}
// 闭包函数  具体代码
function getNowToNewYear() {
    // 时间对象
    var Now = new Date();
    // 验证
    console.log(Now.getTime());
    // 新年时间
    var NewYear = new Date("2021-02-12");
    // 验证
    console.log(NewYear.getFullYear(), NewYear.getMonth(), NewYear.getDate());
    console.log(NewYear.getTime());
    console.log(NewYear.getTime() - Now.getTime());
    // 时间戳 新年到现在的差值
    var sjc = NewYear.getTime() - Now.getTime();
    // console.log((sjc / 1000 / 60 / 60 / 24));
    // 时间戳 单位是毫秒 /1000得到秒数
    sjc = (sjc / 1000);
    // 天数
    var day = parseInt(sjc / 60 / 60 / 24);
    console.log(day);
    // 去掉整天数  余下的小时数
    var hours = parseInt(sjc / 60 / 60 % 24);
    console.log(hours);
    // 去掉整小时数 余下的分钟数
    var minutes = parseInt(sjc / 60 % 60);
    console.log(minutes);
    // 去掉整分钟数 余下的秒数
    var miao = parseInt(sjc % 60);
    console.log(miao);
    // 将得到的值 赋值给相对应的元素对象的innerHTML  在页面显示出来
    mia.innerHTML=miao;
    Second.innerHTML=minutes;
    Minute.innerHTML=hours;
    Day.innerHTML=day;
}
// 定时器  每隔一秒计算一下时间
window.setInterval(function (){
    // 计时器执行的程序   闭包函数
    return getNowToNewYear;
}(),1000);

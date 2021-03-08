try {
    var stopnum
    var YS_IMG = "img/YS.jpeg"
    var FSL_IMG = "img/FSL.jpeg"
    var YS_FSL_IMG = "img/YSFSL.png"
    var CAT_IMG = "img/cat.jpeg"
    var itemYS = ['没有人能够回到过去，但都可以从现在开始。其实我想表达的是不要回头看过往，珍惜现在']
    var itemCAT = ['以后我们一起养一只猫咪和一条小狗']
    var itemFSL = ['😍', '🌹', '期待诗诗的《盗墓笔记》', '恭喜上了王者呀', '下次记得带我去密室逃脱', '下次一起去看樱花呗', '多吃多睡', '有趣的事分享给我也高兴高兴😁', '我希望你每天都能够开开心心呀！', '选择自己所爱的，爱自己所选择的！', '每天晚上要像zhu一样睡得香，哈哈！', '外出注意安全，晚上尽量不要一个人外出呗！', '每天按时吃饭、按时起床睡觉。', '有什么烦恼就要记得和我说呀', '同甘共苦！', '未来可期！', '天冷记得加衣！', '有机会晚上可以试着泡泡jio', '有幸遇见你！', '我们一起加油！', '笑一个呗', '看看今天是我们相识多长时间了', '遇见你是最美好的意外！', '相信我们！', '乖，摸摸头！', '慢慢更多的理解家人']
    var itemOUR = ['如果你看到了这句，那就说明你在想我我也在想你了，那么你就不要犹豫了，给我发个信息吧，这句话点中的概率是很小的勒。你看看特制的背景图！']
    var itemMONRING = ['早上好呀，诗诗']
    var itemZW = ['睡个午觉吧']
    var itemXW = ['正在划个水嘛😁']
    var itemNIGHT = ['不早了，早点休息呗']
    var itemTOONIGHT = ['深夜了，赶紧睡觉，不要看了呗']
    var week = ['', '一', '二', '三', '四', '五', '']
    var Time = new Date()
    var currentYear = Time.getFullYear()
    var currentMonth = Time.getMonth() + 1
    var currentDate = Time.getDate()
    var currentTime = Time.getHours()
    var currentWeek = Time.getDay()
    var item = itemYS.concat(itemFSL).concat(itemOUR).concat(itemCAT)
    if (currentTime >= 7 && currentTime <= 10) {
        item = item.concat(itemMONRING)
    } else if (currentTime === 12 || currentTime === 13) {
        item = item.concat(itemZW)
    } else if (currentTime > 13 && currentTime < 18 && week[currentWeek]) {
        item = item.concat(itemXW)
    } else if (currentTime > 22 && currentTime < 2) {
        item = item.concat(itemNIGHT)
    } else if (currentTime >= 2 && currentTime < 7) {
        item = item.concat(itemTOONIGHT)
    }

    function begin() {
        var num = parseInt(Math.random() * item.length)
        document.getElementById('div3').innerHTML = item[num]
        stopnum = setTimeout('begin()', 20)
        document.getElementById('lovebegin').disabled = true
        document.getElementById('lovenow').disabled = false
    }

    function stop() {
        clearTimeout(stopnum)
        var currentText = document.getElementById('div3').innerHTML || ''
        var currentBackground = document.getElementById('div0').background || ''
        if (itemFSL.includes(currentText) && currentBackground !== YS_IMG) {
            document.getElementById('div0').background = YS_IMG
        } else if (itemYS.includes(currentText) && currentBackground !== FSL_IMG) {
            document.getElementById('div0').background = FSL_IMG
        } else if (itemOUR.includes(currentText) && currentBackground !== YS_FSL_IMG) {
            document.getElementById('div0').background = YS_FSL_IMG
        } else if (itemCAT.includes(currentText) && currentBackground !== CAT_IMG) {
            document.getElementById('div0').background = CAT_IMG
        }
        document.getElementById('lovenow').disabled = true
        document.getElementById('lovebegin').disabled = false
    }

    function onloadFunc() {
        // 动态插入内容①周末愉快②520快乐③下班快乐④划水快乐⑤早上好⑥中午好⑦晚上好
        if (currentMonth === 3 && currentDate === 7) {
            document.getElementById('div3').innerHTML = '诗诗，女王节快乐哟！<br />️<br />️<br />️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--四林'
        } else if (!week[currentWeek]) {
            document.getElementById('div3').innerHTML = '周末愉快！'
        } else if (currentMonth === 5 && currentDate === 20) {
            document.getElementById('div3').innerHTML = '诗诗，情人节快乐哟！❤️'
        } else if (currentTime === 18 && currentMonth < 5) {
            document.getElementById('div3').innerHTML = 'so happy, 下班啦️'
        } else if (currentTime > 14 && currentTime < 18 && currentMonth < 5) {
            document.getElementById('div3').innerHTML = '来划水啦😁'
        } else if (currentTime > 6 && currentTime < 11) {
            document.getElementById('div3').innerHTML = '诗诗，早上好呀'
        } else if (currentTime === 12) {
            document.getElementById('div3').innerHTML = '诗诗，中午好呀'
        } else if (currentTime > 18 && currentTime < 22) {
            document.getElementById('div3').innerHTML = '诗诗，晚上好呀'
        }
        show_time()
    }

    function show_time() {
        var newTime = new Date()
        document.getElementById('div2').innerHTML = newTime.getFullYear() + '年' + (newTime.getMonth() + 1) + '月' + newTime.getDate() + '日' + newTime.getHours() + '时' + newTime.getMinutes() + '分' + newTime.getSeconds() + '秒'
        var time_combin = new Date('2021/02/16 14:16:00').getTime()//定格相识时间
        var time_now = new Date().getTime() //系统当前时间
        var time_love = time_now - time_combin
        if (time_love > 0) {
            // 天时分秒换算
            var int_day = Math.floor(time_love / 86400000)
            time_love -= int_day * 86400000

            var int_hour = Math.floor(time_love / 3600000)
            time_love -= int_hour * 3600000

            var int_minute = Math.floor(time_love / 60000)
            time_love -= int_minute * 60000

            var int_second = Math.floor(time_love / 1000)

            // 时分秒为单数时、前面加零
            if (int_day < 10) {
                int_day = '0' + int_day
            }
            if (int_hour < 10) {
                int_hour = '0' + int_hour
            }
            if (int_minute < 10) {
                int_minute = '0' + int_minute
            }
            if (int_second < 10) {
                int_second = '0' + int_second
            }


            //计算时间差
            document.getElementById('time_d').innerHTML = int_day
            document.getElementById('time_h').innerHTML = int_hour
            document.getElementById('time_m').innerHTML = int_minute
            document.getElementById('time_s').innerHTML = int_second
            setTimeout('show_time()', 1000)
        } else {
            document.getElementById('time_d').innerHTML = 8888
            document.getElementById('time_h').innerHTML = 8
            document.getElementById('time_m').innerHTML = 8
            document.getElementById('time_s').innerHTML = 8
        }
    }
} catch (e) {
//
}
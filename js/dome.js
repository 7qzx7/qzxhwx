window.onload = function () {
    let z09 = document.querySelector('.z09')//第一个点击的柱子
    let z15 = document.querySelector('.z15')//第二个点击的柱子
    let z30 = document.querySelector('.z30')//第三个点击的柱子
    let year = document.querySelector('.year')
    let bz12 = document.querySelector('.bz12')//第四个点击的柱子
    let gz = document.querySelector('.gz')//鸽子
    let imgs = document.querySelector('.img')//第二个页面盒子
    let gzmove = document.querySelector('.gzmove')//鸽子盒子里图片
    let a1 = document.querySelectorAll('.a1')//第一段路程所有柱子
    let a2 = document.querySelectorAll('.a2')//第二段路程所有柱子
    let a3 = document.querySelectorAll('.a3')//第三段路程所有柱子
    let a4 = document.querySelectorAll('.a4')//第四段路程所有柱子
    let dz20 = document.querySelector('.dz20')//手机
    let dz32 = document.querySelector('.dz32')//wifi
    let dz16 = document.querySelector('.dz16')//金币
    let first = document.querySelector('.first')//第一个界面
    let two = document.querySelector('.two')//第二个界面的two盒子
    let z31 = document.querySelector('.z31')//第二个页面阁楼
    let z34 = document.querySelector('.z34')//第二个页面旗杆
    let z18 = document.querySelector('.z18')//第二个页面的摩天轮
    let b1 = document.querySelector('.b1')//四个白圈
    let b2 = document.querySelector('.b2')
    let b3 = document.querySelector('.b3')
    let b4 = document.querySelector('.b4')
    let newimg = document.querySelector('.newimg')
    let topcont = document.querySelector('.topcont')//第二个界面头部
    let mp4 = document.querySelector('#mp4')//四个音效
    let mp2 = document.querySelector('#mp2')
    let mp3 = document.querySelector('#mp3')
    let mp1 = document.querySelector('#mp1')
    let star = document.querySelectorAll('.star')//第三个页面的星球
    let bottom = document.querySelector('.bottom')//第三个页面
    let last12 = document.querySelector('.last12')//第三个页面的柱子
    let gzs = document.querySelector('.gzs')//第三个页面的鸽子

    //鸡走完优先升起的柱子
    let z21 = document.querySelector('.z21')
    let z33 = document.querySelector('.z33')
    let bz17 = document.querySelector('.bz17')

    let ac = imgs.children//第二个页面所有子项
    let ad = two.children第二个页面two里的所有子项
    console.log(ac);
    console.log(ad);
    console.log(bz12.getAttribute('class') == 'bz12 a4');
    let a = b = c = d = 0//定义参数，接收点击事件次数
    let n = 0
    let m = 0
    let times = '', timeout = ''//接收定时器的id
    let flag = true
    let flags = true
    let dv1 = dv2 = dv3 = ''//第二个界面用来替换不同内容

    //刷新音乐
    mp1.play()
    //第二个页面改变样式的数据
    let obj = [
        {
            class: '',
            src: '../img/top2.png',
            p1: '通话时长达到3232分',
            p2: '日常输出量这么大',
            p3: '是不是感觉身体被掏空',
            p4: '按照提示继续查看账单',

        },
        {
            class: 'cen',
            src: '',
            p1: '全年话费999元',
            p2: '其中优惠500元',
            p3: '是不是感觉身体被掏空',
            p4: '2017年江西移动为全省200名用户提供优惠',
        }
        ,
        {
            class: '',
            src: '../img/gift.png',
            p1: '全年话费999元',
            p2: '其中优惠500元',
            p3: '是不是感觉身体被掏空',
            p4: '2017年江西移动为全省200名用户提供优惠',
        }
    ]
    let arr = []
    //第二个页面改变样式的数据
    for (let x in obj) {
        let newobj = `  <img src="${obj[x].src}" alt="">
            <div class="${obj[x].class}">
             <p>${obj[x].p1}</p>
             <p>${obj[x].p2}</p>
                <p>${obj[x].p3}</p>
                <p class="last">${obj[x].p4}</p>
        </div>`
        arr.push(newobj)
    }
    dv1 = arr[0]
    dv2 = arr[1]
    dv3 = arr[2]


    //第一个界面的滑动事件
    first.ontouchmove = function () {
        mp2.play()
        mp1.pause()
        setTimeout(() => {
            mp2.pause()
        }, 3200)
        //第二个页面显示
        two.style.display = 'block'
        year.style.display = 'block'
        topcont.style.display = 'block'
        newimg.style.display = 'none'
        xian(z31)
        xian(z34)
        xian(z18)
        first.style.display = 'none'

        zhui(a1)
        setTimeout(() => {
            setTimeout(() => {
                b1.style.display = 'block'

            }, 3000);
            //第一个点击事件
            z09.addEventListener('click', () => {

                if (flags) {
                    flags = false
                    console.log(222);

                    a++
                    if (a == 1) {
                        firstdian('gez', b1, b2, '6732.5ms', 10232, 2000, dv1, 6732.5)

                        setTimeout(() => {
                            n = 0
                            sj(1, 1516)
                            sj(0, 2693)
                            sj(1, 5251)
                            qc(true, 6732.5, 5251, 1)
                            zhuzidh(z09, 3500, 6732.5, z21, dz20, a2)
                        }, 2000)
                    }
                    else {
                        xunyi('7rem', '20.25rem', dv1)

                    }
                }
            });
            //第二个点击事件
            z15.addEventListener('click', () => {
                if (flags) {
                    flags = false
                    console.log(222);

                    b++
                    if (b == 1) {
                        n = 0
                        sj(1, 517)
                        qc(true, 3976.5, 517, 1)
                        stop(3976.5)
                        zhuzidh(z15, 1800, 4976.5, z33, dz32, a3)

                        firstdian('gez2', b2, b3, '3976.5ms', 7776.5, 0, dv2, 3976.5)
                    }
                    else {
                        xunyi('20rem', '30.5rem', dv2)
                    }
                }
            });
            //第三个点击事件
            z30.addEventListener('click', () => {
                if (flags) {
                    flags = false
                    console.log(222);

                    c++
                    if (c == 1) {
                        n = 2
                        sj(3, 1520)
                        sj(2, 2465)
                        qc(true, 4109, 2465, 2)

                        stop(4109)
                        zhuzidh(z30, 2800, 6109, bz17, dz16, a4)

                        firstdian('gez3', b3, b4, '4109ms', 7909, 0, dv3, 4109)

                    }
                    else {
                        xunyi('27.25rem', '17rem', dv3)
                    }
                }
            });
            //第四个点击事件
            bz12.addEventListener('click', () => {
                if (flags) {
                    flags = false
                    console.log(222);
                    d++
                    if (d == 1) {
                        firstdian('gez4', b4, '', '2810ms', 6410, 0, '', 2810)

                        stop(2810)
                        n = 3
                        sj(0, 1826.5)
                        qc(true, 2810, 1826, 0)

                        setTimeout(() => {
                            mp4.pause()

                        }, 3810);
                        setTimeout(() => {
                            mp3.play()
                            setTimeout(() => {
                                mp3.pause()
                            }, 11000);

                            b4.style.display = 'none'
                            imgs.style.animationName = 'bg';
                            //第二个界面下沉
                            setTimeout(() => {
                                for (let j = 0; j < ac.length; j++) {

                                    ac[j].style.animation = 'last 2s linear forwards'
                                }
                            }, 1000);
                            //柱子升起第四个页面出现
                            gz.style.display = 'none'
                            bz12.style.display = 'none'
                            gzs.style.display = 'block'
                            gzs.style.animation = 'lastge 7s linear forwards'
                            last12.style.display = 'block'
                            last12.style.animation = 'lastge 7s linear forwards'

                            setTimeout(() => {

                            }, 8000);
                            setTimeout(() => {
                                bottom.style.display = 'block'
                            }, 7000)
                            setTimeout(() => {
                                for (let k = 0; k < star.length; k++) {
                                    if (star[k].getAttribute('class') == 'star st1')
                                        star[k].style.animation = 'move1 800ms linear infinite alternate'
                                    else
                                        star[k].style.animation = 'move 800ms linear infinite alternate'
                                }
                            }, 8000);
                        }, 3810);
                    }
                }
            })

            //改变小鸡走向
            function sj(x, y) {
                times = setTimeout(() => {
                    n = x
                }, y)
            }
        }, 1000)

    }
    //第二次点击瞬移，left, bottom定位，dv改变的内容
    function xunyi(left, bottom, dv) {
        flags = true
        gz.style.animationName = ''
        gz.style.left = left
        gz.style.bottom = bottom
        topcont.innerHTML = dv
    }
    //小鸡走路
    function move() {
        m++
        //   n=sum

        if (m > 5) m = 1
        gzmove.setAttribute('src', '../img/gz' + n + m + '.png')
    }
    //第一次点击
    //name1鸽子移动动画，bname，bname1白圈名称，time鸽子移时间，time2新一轮柱子升起完成时间，t点击事件演出触发时间,t2鸽子走完同时改变顶部内容
    function firstdian(name1, bname, bname1, time, time2, t, dv, t2) {
        setTimeout(() => {
            mp4.play()
            bname.style.display = 'none'
            gz.style.animationName = name1
            gz.style.animationDuration = time
            setTimeout(() => {
                flags = true
                if (bname1 != '')
                    bname1.style.display = 'block'

            }, time2)
            // move()
            timeout = setInterval(move, 200)
            setTimeout(() => {
                topcont.innerHTML = dv
            }, t2);

        }, t)
    }
    //柱子上升效果
    function zhui(name) {
        for (let i = 0; i < name.length; i++) {

            setTimeout(() => {
                name[i].style.transform = 'translateY(0)'
                name[i].style.animationName = 'dh'
            }, 1000)
        }
    }

    //清除定时器
    function qc(bool, x, y, z) {
        flag = bool
        if (flag) {
            setTimeout(() => {
                clearInterval(timeout)
            }, x)
            clearTimeout(() => {
                clearTimeout(times)

            }, y)
            flag = false
        } else {
            clearInterval(timeout)
            clearInterval(times)
            n = z
        }
    }
    //柱子升起动画
    function dhs(name1, name2) {
        name1.style.transform = 'translateY(0)'
        name1.style.animationName = 'dh'
        name2.style.transform = 'translateY(0)'
        name2.style.animationName = 'dh'
    }
    //页面渐变显示动画
    function xian(name) {
        name.style.transform = 'translateY(0)'
        name.style.animationName = 'dh'
    }

    //小鸡走完暂停音乐
    function stop(t) {
        setTimeout(() => {
            mp4.pause()
        }, t)
    }
    //柱子升起，升起玩动画暂停
    function zhuzidh(name, t, t1, z1, z2, anz) {
        setTimeout(() => {
            if (name == z09)
                mp4.pause()
            mp2.play()
            setTimeout(() => {
                mp2.pause()
            }, t);
            dhs(z1, z2)
            //鸡走完柱子上升动画，给动画添加名称
            zhui(anz)

        }, t1)
    }
}
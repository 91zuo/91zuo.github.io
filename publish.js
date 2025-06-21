// ======================= 子域名随机生成逻辑 ===========================
var subdomains = [
    'thu', 'pku', 'fdu', 'sjtu', 'zju', 'nju', 'xmu', 'sysu', 'whu', 'jlu',
    'scu', 'ruc', 'bnu', 'nku', 'tju', 'sdu', 'hust', 'xjtu', 'hit'
];

function getRandomSubdomain() {
    return subdomains[Math.floor(Math.random() * subdomains.length)];
}

function getRandomString(length = 3) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function randomNum(minNum, maxNum) {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
}

// ======================= 地址配置 ===========================

var baseDomains = [
    'jbtrzad.top',
];

var emails = ['91dsp2008@gmail.com'];

var JumpPage = "https://91zuo.com";

var newestUrls = [];
for (var i = 0; i < baseDomains.length * 3; i++) {
    newestUrls.push('https://' + getRandomSubdomain() + '.' + baseDomains[randomNum(0, baseDomains.length - 1)]);
}

var otherUrls = [
    'https://91zuo.github.io',
    'https://91zuo.pages.dev',
    'https://91zuo.com'
];

var foreverUrls = ['https://91zuo.com', JumpPage];

var notices = [
    '* 我们推荐 PC 和 Android 手机用户使用 Chrome（谷歌）浏览器访问，iPhone 用户建议使用 Safari 浏览器。',
    '* 大陆地区用户建议使用 VPN 或代理访问永久地址。',
    '* 强烈建议截图收藏当前页面，以防迷路。'
];

// ======================= 页面生成函数 ===========================

function createFieldElem(option) {
    var title = option.title;
    var items = option.items || [];
    var plainText = option.plainText;
    var classStr = option.classStr || '';
    var text = option.text;

    var fieldElem = document.createElement('div');
    fieldElem.setAttribute('class', `field ${classStr}`.trim());

    var titleElem = document.createElement('h4');
    titleElem.setAttribute('class', 'title');
    titleElem.innerHTML = title;
    fieldElem.appendChild(titleElem);

    var ulElem = document.createElement('ul');
    var htmlStr = '';
    for (var i = 0; i < items.length; i++) {
        if (plainText) {
            htmlStr += '<li>' + items[i] + '</li>';
        } else {
            htmlStr += '<li><a href="' + items[i] + '" target="_blank" rel="noopener noreferrer">' + items[i] + '</a></li>';
        }
    }

    if (text) {
        htmlStr += '<li class="text">' + text + '</li>';
    }

    ulElem.innerHTML = htmlStr;
    fieldElem.appendChild(ulElem);
    return fieldElem;
}

// ======================= 页面加载 ===========================

window.onload = function () {
    var mainElem = document.getElementById('main');

    // logo
    var logoElem = document.createElement('div');
    logoElem.setAttribute('class', 'brand');
    logoElem.setAttribute('id', 'logo');
    logoElem.innerHTML = '<img src="logo.png" width="180" style="margin-bottom: 10px;" />';
    mainElem.appendChild(logoElem);

    // 收藏提示
    var favElem = createFieldElem({ title: '<font color=red><b>Ctrl+D</b></font> 收藏此页，永不迷路', items: [] });
    mainElem.appendChild(favElem);

    // 最新地址
    var newestFieldElem = createFieldElem({
        title: '最新可用地址',
        items: newestUrls,
        text: '请使用 https 协议访问本站。'
    });
    mainElem.appendChild(newestFieldElem);

    // 备用发布页
    var otherFieldElem = createFieldElem({
        title: '地址发布页备份（请全部收藏）',
        items: otherUrls
    });
    mainElem.appendChild(otherFieldElem);

    // 获取地址邮箱
    var mailFieldElem = createFieldElem({
        title: '发送邮件获得最新地址',
        items: emails,
        plainText: true
    });
    mainElem.appendChild(mailFieldElem);

    // 永久地址
    var foreverFieldElem = createFieldElem({
        title: '永久地址',
        items: foreverUrls
    });
    mainElem.appendChild(foreverFieldElem);

    // 注意事项
    var noticeFieldElem = createFieldElem({
        title: '注意事项',
        items: notices,
        plainText: true,
        classStr: 'desc'
    });
    mainElem.appendChild(noticeFieldElem);
};


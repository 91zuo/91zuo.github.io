<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>最新地址导航</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #f9f9f9;
      color: #333;
    }
    h2 {
      color: #2c3e50;
    }
    h4 {
      margin-top: 20px;
      color: #34495e;
    }
    ul {
      list-style-type: none;
      padding-left: 0;
    }
    li {
      margin: 5px 0;
    }
    a {
      color: #3498db;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    p {
      background: #fff3cd;
      padding: 10px;
      border: 1px solid #ffeeba;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h2>最新地址导航页</h2>
  <div id="main"></div>

  <script>
    const newestUrls = [
      'https://tmuddo.xyz',
      'https://db1.jgrklkk.xyz'
    ];

    const foreverUrls = [
      'https://91zuo.com'
    ];

    const backupUrls = [
      'https://91zuo.pages.dev',
      'https://91zuo.github.io'
    ];

    function createLinkList(title, urls) {
      const section = document.createElement('div');
      const h4 = document.createElement('h4');
      h4.innerHTML = title;
      section.appendChild(h4);

      const ul = document.createElement('ul');
      urls.forEach(url => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.innerText = url;
        li.appendChild(a);
        ul.appendChild(li);
      });

      section.appendChild(ul);
      return section;
    }

    const main = document.getElementById('main');
    main.appendChild(createLinkList('🔗 最新可用地址', newestUrls));
    main.appendChild(createLinkList('📌 永久地址', foreverUrls));
    main.appendChild(createLinkList('🛠️ 备用地址', backupUrls));

    const notice = document.createElement('p');
    notice.innerHTML = `
      <b>⚠️ 访问失败解决方法：</b><br>
      1. 请使用 <b>Chrome</b> 或 <b>Safari</b> 浏览器<br>
      2. 使用 <code>https</code> 协议打开地址<br>
      3. 设置 DNS 为 <code>8.8.8.8</code> 和 <code>1.1.1.1</code><br>
      4. 尝试使用 VPN 或代理工具访问<br>
    `;
    main.appendChild(notice);
  </script>
</body>
</html>

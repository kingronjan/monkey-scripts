// ==UserScript==
// @name         qq mail
// @namespace    http://tampermonkey.net/
// @version      2025-11-19
// @description  try to take over the world!
// @author       kingronjan
// @match        https://wx.mail.qq.com/home/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let body = document.querySelector('body');
    let observer = new MutationObserver(function () {
        console.log('hello world');

        // 移除功能区按钮
        let feaElement = document.querySelector('.sidebar-feature-title');
        while (feaElement.nextSibling) {
            feaElement.nextSibling.remove()
        }

        feaElement.remove();

        // 侧边栏缩小
        let sidebar = document.querySelector('.frame-sidebar')
        if (sidebar) {
            sidebar.style.width = '180px'
        }

        // 移除普通用户的按钮
        document.querySelector('.cmp-common-state-icon').remove()
    })

    observer.observe(body, { childList: true, subtree: true })
})();

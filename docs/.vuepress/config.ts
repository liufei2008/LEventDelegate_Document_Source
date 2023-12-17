import { defaultTheme } from "vuepress";

export default {
    locales: {
        '/': {
            lang: 'en-US',
        },
        "/zh-cn/": {
            lang: '中文',
        }
    },
    base: "/LEventDelegateDoc/",
    dest: "$(sourceDir)/../../liufei2008.github.io/LEventDelegateDoc",
    theme: defaultTheme({
        locales: {
            '/':
            {
                colorModeSwitch: true,
                selectLanguageText: 'Languages',
                selectLanguageName: 'English',
                selectLanguageAriaLabel: 'Languages',
                editLink: true,
                editLinkText: 'Edit this page on Github',
                logo: "logo.png",
                home: "/"
            },
            '/zh-cn/':
            {
                selectLanguageText: '选择语言',
                selectLanguageName: '中文',
                selectLanguageAriaLabel: 'Languages',
                editLinkText: '在Github上编辑此页面',
                logo: "logo.png",
                home: "/"
            }
        },
    }),
}
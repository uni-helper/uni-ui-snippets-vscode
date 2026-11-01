# @uni-helper/uni-ui-snippets-vscode

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/uni-helper/uni-ui-snippets-vscode@main/logo.png" alt="logo" width="256" height="256" />
</p>

<p align="center">
  <a href="https://github.com/uni-helper/uni-ui-snippets-vscode/blob/main/LICENSE"><img src="https://img.shields.io/github/license/uni-helper/uni-ui-snippets-vscode?labelColor=005947&color=eee&style=for-the-badge" alt="License"></a>
  <a href="https://github.com/uni-helper/uni-ui-snippets-vscode/stargazers"><img src="https://img.shields.io/github/stars/uni-helper/uni-ui-snippets-vscode?labelColor=005947&color=eee&style=for-the-badge" alt="GitHub Stars"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-ui-snippets-vscode"><img src="https://vsmarketplacebadges.dev/version-short/uni-helper.uni-ui-snippets-vscode.svg?labelColor=005947&color=eee&style=for-the-badge" alt="VSCode version"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-ui-snippets-vscode"><img src="https://vsmarketplacebadges.dev/downloads-short/uni-helper.uni-ui-snippets-vscode.svg?labelColor=005947&color=eee&style=for-the-badge" alt="VSCode downloads"></a>
</p>
<p align="center">
  <a href="https://github.com/ModyQyW"><img src="https://img.shields.io/badge/Author%20%26%20Maintainer-ModyQyW-blue?style=for-the-badge" alt="Author & Maintainer"></a>
</p>

为 [uni-app](https://uniapp.dcloud.net.cn/) 的 [uni-ui](https://uniapp.dcloud.net.cn/component/uniui/uni-ui) 提供基本能力代码片段。

> **请考虑持续[赞助](https://github.com/ModyQyW/sponsors)以维持该项目的持续健康发展，非常感谢！🙏**

[改动日志](https://github.com/uni-helper/uni-ui-snippets-vscode/blob/main/CHANGELOG.md)

想让 `uni-app` 开发变得更直观、高效？想要更好的 `uni-app` 开发体验？不妨看看 [uni-helper 主页](https://uni-helper.js.org) 和 [uni-helper GitHub Organization](https://github.com/uni-helper)！

## 插件特性

- uni-ui 基本能力代码片段
- 参考 [uni-ui 官方组件文档](https://github.com/dcloudio/uni-ui#readme)
- 参考 [Vue.js 2 风格指南](https://v2.cn.vuejs.org/v2/style-guide/) 和 [Vue.js 3 风格指南](https://cn.vuejs.org/style-guide/)

**插件和文档的冲突之处，请以文档为准。**

## 使用

安装插件后重启 VSCode 即可。

## HTML

|API|Prefix|Description|
|-|-|-|
|`<uni-badge>`|`uni-badge`, `<uni-badge>`, `UniBadge`, `<UniBadge>`|uni-ui 数字角标，一般配合列表、宫格等控件使用，用于数量提示，默认实心灰色背景。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-badge>。|
|`<uni-breadcrumb>`|`uni-breadcrumb`, `<uni-breadcrumb>`, `UniBreadcrumb`, `<UniBreadcrumb>`|uni-ui 面包屑，显示当前页面的路径，快速返回之前的任意页面。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-breadcrumb>。|
|`<uni-breadcrumb-item>`|`uni-breadcrumb-item`, `<uni-breadcrumb-item>`, `UniBreadcrumbItem`, `<UniBreadcrumbItem>`|uni-ui 面包屑项，表示路径中的一级，可设置点击后跳转的页面。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-breadcrumb>。|
|`<uni-calendar>`|`uni-calendar`, `<uni-calendar>`, `UniCalendar`, `<UniCalendar>`|uni-ui 日历，可查看日期、选择日期范围、在日期上打点，常用于酒店预订、机票选择、打卡等场景。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-calendar>。|
|`<uni-card>`|`uni-card`, `<uni-card>`, `UniCard`, `<UniCard>`|uni-ui 卡片，用于显示完整独立的一段信息，如文章的预览图、作者信息、时间等，常作为详情页的入口。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-card>。|
|`<uni-collapse>`|`uni-collapse`, `<uni-collapse>`, `UniCollapse`, `<UniCollapse>`|uni-ui 折叠面板，折叠或展开过长的内容，常用于多内容的分类项。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-collapse>。|
|`<uni-collapse-item>`|`uni-collapse-item`, `<uni-collapse-item>`, `UniCollapseItem`, `<UniCollapseItem>`|uni-ui 折叠面板项，通过 title 属性设置面板标题，点击展开或折叠。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-collapse>。|
|`<uni-combox>`|`uni-combox`, `<uni-combox>`, `UniCombox`, `<UniCombox>`|uni-ui 组合框，一般用于可以选择也可以输入的表单项。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-combox>。|
|`<uni-countdown>`|`uni-countdown`, `<uni-countdown>`, `UniCountdown`, `<UniCountdown>`|uni-ui 倒计时，按天、时、分、秒展示剩余时间。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-countdown>。|
|`<uni-data-checkbox>`|`uni-data-checkbox`, `<uni-data-checkbox>`, `UniDataCheckbox`, `<UniDataCheckbox>`|uni-ui 数据选择器，对基础组件 checkbox 的封装，支持单选、多选，以及列表、按钮、标签等显示模式。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-data-checkbox>。|
|`<uni-data-select>`|`uni-data-select`, `<uni-data-select>`, `UniDataSelect`, `<UniDataSelect>`|uni-ui 下拉选择框，选项过多时用下拉菜单展示并选择内容。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-data-select>。|
|`<uni-data-picker>`|`uni-data-picker`, `<uni-data-picker>`, `UniDataPicker`, `<UniDataPicker>`|uni-ui 级联选择器，支持单列和多列级联，适用于地址选择、分类选择等场景。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-data-picker>。|
|`<uni-dateformat>`|`uni-dateformat`, `<uni-dateformat>`, `UniDateformat`, `<UniDateformat>`|uni-ui 日期格式化，可按阈值把时间显示成「刚刚」「几分钟前」等友好文案，请考虑使用 [dayjs](https://day.js.org/docs/zh-CN/)。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-dateformat>。|
|`<uni-datetime-picker>`|`uni-datetime-picker`, `<uni-datetime-picker>`, `UniDatetimePicker`, `<UniDatetimePicker>`|uni-ui 日期时间选择器，支持日期、日期时间及范围选择，可输入输出时间戳。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-datetime-picker>。|
|`<uni-drawer>`|`uni-drawer`, `<uni-drawer>`, `UniDrawer`, `<UniDrawer>`|uni-ui 抽屉，从屏幕边缘滑出的侧滑菜单。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-drawer>。|
|`<uni-easyinput>`|`uni-easyinput`, `<uni-easyinput>`, `UniEasyinput`, `<UniEasyinput>`|uni-ui 增强输入框，为配合表单组件设计，内置边框、图标和清除按钮。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-easyinput>。|
|`<uni-fab>`|`uni-fab`, `<uni-fab>`, `UniFab`, `<UniFab>`|uni-ui 悬浮按钮，点击可展开一个图形按钮菜单。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-fab>。|
|`<uni-fav>`|`uni-fav`, `<uni-fav>`, `UniFav`, `<UniFav>`|uni-ui 收藏按钮，可点击切换选中和不选中的状态。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-fav>。|
|`<uni-file-picker>`|`uni-file-picker`, `<uni-file-picker>`, `UniFilePicker`, `<UniFilePicker>`|uni-ui 文件选择上传，可选择图片、视频等任意文件并上传到绑定的服务空间。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-file-picker>。|
|`<uni-forms>`|`uni-forms`, `<uni-forms>`, `UniForms`, `<UniForms>`|uni-ui 表单，对原生 form 的封装，内置表单校验，配合 uni-forms-item 使用。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-forms>。|
|`<uni-forms-item>`|`uni-forms-item`, `<uni-forms-item>`, `UniFormsItem`, `<UniFormsItem>`|uni-ui 表单项，包裹单个输入控件并显示校验错误信息。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-forms>。|
|`<uni-goods-nav>`|`uni-goods-nav`, `<uni-goods-nav>`, `UniGoodsNav`, `<UniGoodsNav>`|uni-ui 商品导航，用于商品页的加入购物车、立即购买等操作。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-goods-nav>。|
|`<uni-grid>`|`uni-grid`, `<uni-grid>`, `UniGrid`, `<UniGrid>`|uni-ui 宫格，把内容按指定的列数分格展示。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-grid>。|
|`<uni-grid-item>`|`uni-grid-item`, `<uni-grid-item>`, `UniGridItem`, `<UniGridItem>`|uni-ui 宫格项，放在宫格里表示一个格子。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-grid>。|
|`<uni-group>`|`uni-group`, `<uni-group>`, `UniGroup`, `<UniGroup>`|uni-ui 分组，把组件分组并添加间隔，形成明显的区块。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-group>。|
|`<uni-icons>`|`uni-icons`, `<uni-icons>`, `UniIcons`, `<UniIcons>`|uni-ui 图标，通过 type、size、color 配置图标。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-icons>。|
|`<uni-indexed-list>`|`uni-indexed-list`, `<uni-indexed-list>`, `UniIndexedList`, `<UniIndexedList>`|uni-ui 索引列表，按字母索引分组展示列表，常用于通讯录。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-indexed-list>。|
|`<uni-link>`|`uni-link`, `<uni-link>`, `UniLink`, `<UniLink>`|uni-ui 超链接，小程序内复制 URL，App 内打开外部浏览器，H5 打开新网页。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-link>。|
|`<uni-list>`|`uni-list`, `<uni-list>`, `UniList`, `<UniList>`|uni-ui 列表，包含基本列表样式、可扩展插槽和长列表性能优化。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-list>。|
|`<uni-list-chat>`|`uni-list-chat`, `<uni-list-chat>`, `UniListChat`, `<UniListChat>`|uni-ui 聊天列表项，展示一条会话的头像、标题、时间和未读数。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-list>。|
|`<uni-list-item>`|`uni-list-item`, `<uni-list-item>`, `UniListItem`, `<UniListItem>`|uni-ui 列表项，代表列表中的一行，可通过插槽自定义内容。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-list>。|
|`<uni-load-more>`|`uni-load-more`, `<uni-load-more>`, `UniLoadMore`, `<UniLoadMore>`|uni-ui 加载更多，用于列表滚动加载时展示 loading 的各种状态。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-load-more>。|
|`<uni-nav-bar>`|`uni-nav-bar`, `<uni-nav-bar>`, `UniNavBar`, `<UniNavBar>`|uni-ui 导航栏，用于页面头部导航。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-nav-bar>。|
|`<uni-notice-bar>`|`uni-notice-bar`, `<uni-notice-bar>`, `UniNoticeBar`, `<UniNoticeBar>`|uni-ui 通告栏，用于循环滚动展示消息提醒。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-notice-bar>。|
|`<uni-number-box>`|`uni-number-box`, `<uni-number-box>`, `UniNumberBox`, `<UniNumberBox>`|uni-ui 数字输入框，带加减按钮。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-number-box>。|
|`<uni-pagination>`|`uni-pagination`, `<uni-pagination>`, `UniPagination`, `<UniPagination>`|uni-ui 分页器，用于展示页码、请求数据等。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-pagination>。|
|`<uni-popup>`|`uni-popup`, `<uni-popup>`, `UniPopup`, `<UniPopup>`|uni-ui 弹出层，可在应用中弹出消息提示、对话框等，支持上、下、左、右、居中弹出。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-popup>。|
|`<uni-popup-dialog>`|`uni-popup-dialog`, `<uni-popup-dialog>`, `UniPopupDialog`, `<UniPopupDialog>`|uni-ui 弹出层对话框，支持提示和可输入两种模式。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-popup>。|
|`<uni-popup-message>`|`uni-popup-message`, `<uni-popup-message>`, `UniPopupMessage`, `<UniPopupMessage>`|uni-ui 弹出层消息提示，显示一段时间后自动关闭。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-popup>。|
|`<uni-popup-share>`|`uni-popup-share`, `<uni-popup-share>`, `UniPopupShare`, `<UniPopupShare>`|uni-ui 弹出层分享，从底部弹出供用户选择分享渠道。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-popup>。|
|`<uni-rate>`|`uni-rate`, `<uni-rate>`, `UniRate`, `<UniRate>`|uni-ui 评分，多用于商品评价等场景，支持半星和禁用状态。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-rate>。|
|`<uni-row>`|`uni-row`, `<uni-row>`, `UniRow`, `<UniRow>`|uni-ui 布局行，配合 uni-col 使用，把屏幕分成 24 份做流式栅格布局。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-row>。|
|`<uni-col>`|`uni-col`, `<uni-col>`, `UniCol`, `<UniCol>`|uni-ui 布局列，放在布局行里占指定份数的栅格。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-row>。|
|`<uni-section>`|`uni-section`, `<uni-section>`, `UniSection`, `<UniSection>`|uni-ui 标题栏，一般用于文章、列表详情等标题展示。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-section>。|
|`<uni-search-bar>`|`uni-search-bar`, `<uni-search-bar>`, `UniSearchBar`, `<UniSearchBar>`|uni-ui 搜索栏，用于输入关键字并触发搜索。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-search-bar>。|
|`<uni-segmented-control>`|`uni-segmented-control`, `<uni-segmented-control>`, `UniSegmentedControl`, `<UniSegmentedControl>`|uni-ui 分段器，用于在不同视图之间切换。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-segmented-control>。|
|`<uni-steps>`|`uni-steps`, `<uni-steps>`, `UniSteps`, `<UniSteps>`|uni-ui 步骤条，常用于显示进度。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-steps>。|
|`<uni-swipe-action>`|`uni-swipe-action`, `<uni-swipe-action>`, `UniSwipeAction`, `<UniSwipeAction>`|uni-ui 滑动操作，通过滑动展示操作选项的容器。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-swipe-action>。|
|`<uni-swipe-action-item>`|`uni-swipe-action-item`, `<uni-swipe-action-item>`, `UniSwipeActionItem`, `<UniSwipeActionItem>`|uni-ui 滑动操作项，放在滑动操作里，向左或向右滑动显示按钮。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-swipe-action>。|
|`<uni-swiper-dot>`|`uni-swiper-dot`, `<uni-swiper-dot>`, `UniSwiperDot`, `<UniSwiperDot>`|uni-ui 轮播图指示点，可自定义指示点的样式和显示内容。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-swiper-dot>。|
|`<uni-table>`|`uni-table`, `<uni-table>`, `UniTable`, `<UniTable>`|uni-ui 表格，用于展示多条结构类似的数据。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-table>。|
|`<uni-tr>`|`uni-tr`, `<uni-tr>`, `UniTr`, `<UniTr>`|uni-ui 表格行，放在表格里，一行内包含表头或单元格。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-table>。|
|`<uni-th>`|`uni-th`, `<uni-th>`, `UniTh`, `<UniTh>`|uni-ui 表格头，放在表格行里表示一列的表头。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-table>。|
|`<uni-td>`|`uni-td`, `<uni-td>`, `UniTd`, `<UniTd>`|uni-ui 单元格，放在表格行里表示一个数据格。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-table>。|
|`<uni-tag>`|`uni-tag`, `<uni-tag>`, `UniTag`, `<UniTag>`|uni-ui 标签，用于展示一个或多个文字标签，可点击切换选中状态。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-tag>。|
|`<uni-title>`|`uni-title`, `<uni-title>`, `UniTitle`, `<UniTitle>`|uni-ui 标题，用于页面或区块标题，开启 uni 统计时会自动采集页面标题。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-title>。|
|`<uni-tooltip>`|`uni-tooltip`, `<uni-tooltip>`, `UniTooltip`, `<UniTooltip>`|uni-ui 文字提示，常用于展示鼠标悬浮时的提示信息。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-tooltip>。|
|`<uni-transition>`|`uni-transition`, `<uni-transition>`, `UniTransition`, `<UniTransition>`|uni-ui 过渡动画，内置淡入淡出、滑动、缩放等动画，配合 show 控制显隐。更多信息查看 <https://uniapp.dcloud.net.cn/component/uniui/uni-transition>。|

## 参与贡献

欢迎通过 Issue 或 Pull Request 参与改进本项目。开始前请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)，了解项目结构、本地开发流程、测试方式与提交规范。

## 许可证

[MIT](https://github.com/uni-helper/uni-ui-snippets-vscode/blob/main/LICENSE) © 2020-present [uni-helper](https://github.com/uni-helper) & Collaborators

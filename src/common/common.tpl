<!-- target: mainHeader -->
<!-- var: pageTitle = ${pageTitle} || 'Startup News' -->
<header class="ui-bar main-header" data-ui="primary header" data-viewport-bar="header" data-name="${pageTitle}">
    <!-- if: ${showBack} -->
    <a href="#" class="ui-btn" data-ui="primary icon-left">
        <i class="icon-left"></i>
        返回
    </a>
    <!-- /if -->
    <h1 data-ui="title">${pageTitle}</h1>
</header>

<!-- if: ${showNav} -->
<nav class="ui-bar main-nav" data-ui="subheader" data-viewport-bar="subheader">
    <div class="ui-btns" data-ui="block">
        <!-- if: ${pageName} == 'list_hot' -->
        <a class="ui-btn" data-ui="active">热门</a>
        <!-- else -->
        <a class="ui-btn" href="#/">热门</a>
        <!-- /if -->

        <!-- if: ${pageName} == 'list_new' -->
        <a class="ui-btn" data-ui="active">最新</a>
        <!-- else -->
        <a class="ui-btn" href="#/list/new">最新</a>
        <!-- /if -->
    </div>
</nav>
<!-- /if -->


<!-- target: newsList -->
<!-- for: ${list} as ${item}, ${index} -->
<a href="#/post/${item.id}" class="news-item">
    <span data-role="meta">
        <span data-role="author">no.${item.no|html} by ${item.author|html}</span>
        <span data-role="time">${item.createDate|html}</span>
    </span>

    <!-- if: ${item.read} -->
    <h2 data-role="title" data-state="read">${item.title|html}</h2>
    <!-- else -->
    <h2 data-role="title">${item.title|html}</h2>
    <!-- /if -->

    <span data-role="meta">
        <span data-role="count">${item.meta|html}</span>
        <span data-role="host">${item.source|html}</span>
    </span>
</a>
<!-- /for -->


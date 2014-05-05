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

<!-- if: ${item.comments} > 0 -->
<a href="#/post/${item.id}" class="news-item">
<!-- else -->
<a href="${item.url}" target="_blank" class="news-item">
<!-- /if -->

    <span data-role="meta">
        <span data-role="author">no.${item.no} by ${item.author}</span>
        <span data-role="time">${item.createDate}</span>
    </span>

    <!-- if: ${item.read} -->
    <h2 data-role="title" data-state="read">
    <!-- else -->
    <h2 data-role="title">
    <!-- /if -->
        ${item.title}
        <!-- if: ${item.comments} > 0 -->
            <i class="icon-comments"></i>
        <!-- else -->
            <i class="icon-external-link"></i>
        <!-- /if -->
    </h2>

    <span data-role="meta">
        <span data-role="count">${item.meta}</span>
        <span data-role="host">${item.source}</span>
    </span>
</a>
<!-- /for -->


<!-- target: mainHeader -->
<header class="main-header" data-viewport-bar="header" data-name="${pageName}">
    <nav class="ui-bar" data-ui="primary header">
        <h1 data-ui="title">${pageName}</h1>
    </nav>
</header>

<!-- target: mainFooter -->
<footer class="main-footer" data-viewport-bar="footer" data-name="main">
    <nav class="ui-bar" data-ui="footer">
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
</footer>

<!-- target: newsList -->
<!-- for: ${list} as ${item}, ${index} -->
<a href="#/detail/${item.id}" class="news-item">
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


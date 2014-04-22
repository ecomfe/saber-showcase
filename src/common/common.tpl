<!-- target: mainHeader -->
<header class="ui-bar main-header" data-ui="primary" data-viewport-bar="header" data-name="${pageName}">
    <h1 data-ui="title">${pageName}</h1>
</header>

<!-- target: mainFooter -->
<footer class="ui-bar main-footer" data-ui="footer" data-viewport-bar="footer" data-name="main">
    <div class="ui-btns" data-ui="block">
        <!-- if: ${pageName} == 'list_hot' -->
        <a class="ui-btn" data-ui="active">热门</a>
        <!-- else -->
        <a class="ui-btn" href="#/">热门</a>
        <!-- /if -->

        <!-- if: ${pageName} == 'list_new' -->
        <a class="ui-btn" data-ui="active">分类</a>
        <!-- else -->
        <a class="ui-btn" href="#/list/new">分类</a>
        <!-- /if -->
    </div>
</footer>

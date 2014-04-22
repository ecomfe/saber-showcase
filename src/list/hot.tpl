<!-- target: list_hot -->
<!-- use: mainHeader(pageName='list_hot') -->
<div class="main-container">
    <ul>
        <!-- for: ${list} as ${item} -->
        <li><a href="#/detail/${item.id}">${item.title|html}</a></li>
        <!-- /for -->
    </ul>
</div>
<!-- use: mainFooter(pageName='list_hot') -->

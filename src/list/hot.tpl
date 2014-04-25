<!-- use: mainHeader(pageName='list_hot') -->
<div class="main-container">

    <div class="news-list">
        <!-- for: ${list} as ${item}, ${index} -->
        <!-- var: num = ${index} + 1 -->
        <a href="#/detail/${item.id}" class="news-item">
            <span data-role="meta">
                <span data-role="author">no.${num} by firede</span>
                <span data-role="time">2 days ago</span>
            </span>

            <!-- if: ${item.read} -->
            <h2 data-role="title" data-state="read">${item.title|html}</h2>
            <!-- else -->
            <h2 data-role="title">${item.title|html}</h2>
            <!-- /if -->

            <span data-role="meta">
                <span data-role="count">5 points, 1 comment</span>
                <span data-role="host">github.io</span>
            </span>
        </a>
        <!-- /for -->
    </div>

</div>
<!-- use: mainFooter(pageName='list_hot') -->

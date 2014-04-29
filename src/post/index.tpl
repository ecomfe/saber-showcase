<!-- use: mainHeader(pageTitle='Comments', showBack=true) -->
<div class="post-container">
    <div class="post-detail">

        <h2 data-role="title">
            <a href="${detail.url|html}" target="_blank">${detail.title|html}<i class="icon-external-link"></i></a>
        </h2>

        <!-- 先判断是否有 content -->
        <!-- if: ${detail.content} -->
        <div data-role="content" class="ui-content">
            ${detail.content|html}
        </div>
        <!-- /if -->

        <div data-role="meta">
            <span data-role="author">${detail.author|html}</span>
            <!--
            <span data-role="count">3 points</span>
            -->
            <span data-role="time">${detail.createDate|html}</span>
        </div>
    </div>

    <div class="post-comments">
        <!-- for: ${comments} as ${comment} -->
        <div class="post-comment">
            <div data-role="content" class="ui-content">${comment.content|html}</div>
            <div data-role="meta">
                <span data-role="author">${comment.author|html}</span>
                <span data-role="count">${comment.points|html} point<!-- if: ${comment.points} > 1 -->s<!-- /if --></span>
                <span data-role="time">${comment.createDate|html}</span>
            </div>
        </div>
        <!-- /for -->
    </div>
</div>

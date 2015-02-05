<!-- use: mainHeader(pageTitle='Comments', showBack=true) -->
<div class="post-container">
    <div class="post-detail">

        <h2 data-role="title">
            <a href="${detail.url}" target="_blank">${detail.title}<i class="icon-external-link"></i></a>
        </h2>

        <!-- 先判断是否有 content -->
        <!-- if: ${detail.content} -->
        <div data-role="content" class="ui-content">
            ${detail.content|raw}
        </div>
        <!-- /if -->

        <div data-role="meta">
            <span data-role="author">${detail.author}</span>
            <span data-role="count">${detail.points} point<!-- if: ${detail.points} > 1 -->s<!-- /if --></span>
            <span data-role="time">${detail.createDate}</span>
        </div>
    </div>

    <div class="post-comments">
        <!-- for: ${comments} as ${comment} -->
        <div class="post-comment">
            <div data-role="content" class="ui-content">${comment.content}</div>
            <div data-role="meta">
                <span data-role="author">${comment.author}</span>
                <span data-role="count">${comment.points} point<!-- if: ${comment.points} > 1 -->s<!-- /if --></span>
                <span data-role="time">${comment.createDate}</span>
            </div>
        </div>
        <!-- /for -->
    </div>
</div>

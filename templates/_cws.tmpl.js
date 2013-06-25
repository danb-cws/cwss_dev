<script type="text/html" id="projectsTemplate">

<article>

    <h3>{projectName}</h3>
    <dl>
        <dt>{uIclient}:</dt>
        <dd>{client}</dd>

        <dt>{uIagency}:</dt>
        <dd>{agency}</dd>

        <dt>{uIprojectDescription}:</dt>
        <dd>{projectDescription}</dd>

        <dt>{uIworkUndertaken}:</dt>
        <dd>{extendedInfo.workUndertaken|s}</dd>

        {?extendedInfo.otherDetails}
            <dt>{uIotherDetails}:</dt>
            <dd>
                <ol>
                    {#extendedInfo.otherDetails}
                        <li>{.}</li>
                    {/extendedInfo.otherDetails}
                </ol>
            </dd>
        {/extendedInfo.otherDetails}

        {?assets.images}
            <dt>{uIimages}:</dt>
            <dd>
                <ul>
                    {#assets.images}
                        <li><img src="{.url}" alt="{.title}"/></li>
                    {/assets.images}
                </ul>
            </dd>
        {/assets.images}
        
        {?assets.links}
            <dt>{uIlinks}:</dt>
            <dd>
                <ul>
                    {#assets.links}
                        <li><a href="{.url}" title="{.title}">{.title}</a></li>
                    {/assets.links}
                </ul>
            </dd>
        {/assets.links}
    </dl>

</article>

</script>
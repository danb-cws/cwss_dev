<script type="text/html" id="projectsTemplate">

<article>

	<div class="articleInner">

		<div class="hero">
			<img src="
				{?assets.images}
					{#assets.images[0]}{!ie only first image for bg!}
						{.url}
					{/assets.images[0]}
				{/assets.images}
			"/>
		</div>

		<header>
			<h3>{projectName}</h3>
		</header>

		<section class="projectDescription">
			<p>{projectDescription}</p>
		</section>

		<dl class="client">
			<dt>{uIagency}:</dt>
			<dd>{agency}</dd>
			<dt>{uIclient}:</dt>
			<dd>{client}</dd>
			{?duration}
				<dt>{uIduration}:</dt>
				<dd>{duration}</dd>
			{/duration}
		</dl>

		<section class="jobDetail">
			<h4>{uIworkUndertaken}:</h4>
			<p>{extendedInfo.workUndertaken|s}</p>
			{?extendedInfo.otherDetails}
				<div class="otherDetails">
					<h5>{uIotherDetails}:</h5>
					<ul class="otherDetailsList">
						{#extendedInfo.otherDetails}
							<li>{.}</li>
						{/extendedInfo.otherDetails}
					</ul>
				</div>
			{/extendedInfo.otherDetails}
		</section>

		{?assets.images}
			<section class="projImages">
				<h5>{uIimages}:</h5>
				<ul>
					{#assets.images}
						<li><img src="{.url}" alt="{.title}"/></li>
					{/assets.images}
				</ul>
			</section>
		{/assets.images}


		{?assets.links}
			<section class="projLinks">
				<h5>{uIlinks}:</h5>
				<ul>
					{#assets.links}
						<li><a href="{.url}" title="{.title}">{.title}</a></li>
					{/assets.links}
				</ul>
			</section>
		{/assets.links}


	</div>

</article>

</script>

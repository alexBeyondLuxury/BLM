<?php get_header(); ?>

	<main role="main">
		<!-- section -->
		<section>

			<!-- article -->
			<article id="post-404">
				<div class="page404">
				<h1><?php _e( 'Oops, Page not found!', 'html5blank' ); ?></h1>
				<div class="layout layout--cta">
					<div class="layout__item layout__item--cta"><a href="<?php echo home_url(); ?>"><?php _e( 'RETURN HOME?', 'html5blank' ); ?></a></div>
				</div>

			</article>
			<!-- /article -->

		</section>
		<!-- /section -->
	</main>

<?php get_footer(); ?>

<?php
/*
Plugin Name: Speakers
Description: Displays speakers with the "speakers_shortcode" shortcode
Author: Alex Hooper
Version: 1.0
License: GPL version 2 or later - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
*/

function speaker() {

    $labels = array(
        'name'                  => _x( 'Speakers', 'Post Type General Name', 'fire' ),
        'singular_name'         => _x( 'Speaker', 'Post Type Singular Name', 'fire' ),
		'menu_name'             => __( 'Speakers', 'fire' ),
        'name_admin_bar'        => __( 'Speakers', 'fire' ),
        'archives'              => __( 'Speaker Archives', 'fire' ),
        'parent_item_colon'     => __( 'Parent Item:', 'fire' ),
        'all_items'             => __( 'All Speakers', 'fire' ),
        'add_new_item'          => __( 'Add New Speaker', 'fire' ),
        'add_new'               => __( 'Add New', 'fire' ),
        'new_item'              => __( 'New Speaker', 'fire' ),
        'edit_item'             => __( 'Edit Speaker', 'fire' ),
        'update_item'           => __( 'Update Speaker', 'fire' ),
        'view_item'             => __( 'View Speaker', 'fire' ),
        'search_items'          => __( 'Search Speakers', 'fire' ),
        'not_found'             => __( 'Not found', 'fire' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'fire' ),
        'featured_image'        => __( 'Speaker Image', 'fire' ),
        'set_featured_image'    => __( 'Set Speaker image', 'fire' ),
        'remove_featured_image' => __( 'Remove Speaker image', 'fire' ),
        'use_featured_image'    => __( 'Use as Speaker image', 'fire' ),
        'insert_into_item'      => __( 'Insert into Speaker', 'fire' ),
        'uploaded_to_this_item' => __( 'Uploaded to this Speaker', 'fire' ),
        'items_list'            => __( 'Speaker list', 'fire' ),
        'items_list_navigation' => __( 'Speaker list navigation', 'fire' ),
        'filter_items_list'     => __( 'Filter Speaker list', 'fire' ),
    );
    $args = array(
        'label'                 => __( 'Speakers', 'fire' ),
        'description'           => __( 'Custom post type for Speakers.', 'fire' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'excerpt', 'thumbnail', 'revisions', 'page-attributes', ),
        'taxonomies'            => array('companies'),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,        
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'menu_icon'				=> 'dashicons-groups',
    );
    register_post_type( 'speaker', $args );

}

function speakers_shortcode() {
	ob_start();
    ?>
	 <div>
						
							<div class="speaker__items u-margin-bottom-large">
								<div class="speaker__items__sizer"></div>
								    	<?php
											$args = array(
                                                post_type => 'speaker',
                                                'posts_per_page' => -1
												);
				
											$the_query = new WP_Query($args);
										?>
								<?php if ($the_query->have_posts() ): while ($the_query->have_posts() ) :$the_query->the_post(); ?>
								
								<div class="speaker__item speaker__item--shown speaker__item--collapsed">
									<div>
										<div class="speaker__item__detail speaker__item-detail speaker__item-detail--basic">
											<div class="speaker__item-detail__shadow">
												<div class=" speaker__item-detail__summary" style="background-image:linear-gradient(to bottom, rgba(153,153,153,0) 0%,rgba(0,0,0,0.32) 100%), url(<?php the_field('speaker_photo');?>); background-position: 50% 50%;">
													<div class="speaker__item-detail__summary__text">
														<h3 class=" speaker__item-detail__heading "><?php the_title(); ?></h3>
														<div class=" speaker__item-detail__tag ">
															<p><?php the_field('speaker_title');?>, <?php the_field('company');?></p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class=" speaker__item__data  speaker__item-data speaker__item-data--expand">
											<div class=" speaker__item-data__inner ">
												<button class=" c-btn c-btn--close c-btn--right c-btn--close-cards  u-bg-base u-bg-base--grey  icon-close " type="button"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="357px" height="357px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
<g>
	<g id="clear">
		<polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
			214.2,178.5 		"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg></button>
												<div class="  speaker__item-data__wrapper  ">
													<div class=" speaker__layout speaker__layout--large speaker__layout--flex-same-height speaker__layout--flex-wrap ">
														<div class=" speaker__layout__item   u-1/1@mobile u-2/3@tablet u-2/3@desktop speaker__layout__item__bio ">
															<div class=" speaker__item-data__section ">
																<h3 class=" speaker__item-data__heading "><?php the_title(); ?></h3>
																<p class=" speaker__item-data__tag "><em><?php the_field('speaker_title');?>, <?php the_field('company');?></em></p>
																<div class=" speaker__item-data__content ">
																	<div>
																		<p><?php the_field('bio'); ?></p>
																	</div>
																</div>
																														</div>
														</div>
														<div class=" speaker__layout__item speaker__layout__item-flex  u-1/1@mobile u-1/3@tablet u-1/3@desktop ">
															<div class=" speaker__item-data__section speaker__item-data__section--border ">
																<div class=" c-event-details c-event-details--cards ">
																	<h3 class=" c-event-details__heading ">Speaking on:</h3>
																	<div>
																		<div class=" c-event-details__section ">
																	    	<div class="talk">
																		    	<p class="talk__name">
																			    	<?php the_field('primary_talk_title');?>
																		    	</p>
																		    	<p class="talk__date">
																			    	<?php the_field('primary_talk_date');?>
																		    	</p>
																	    	</div>
																			<div class="talk">
																				<p class="talk__name talk__name--secondary">
																					
																					<?php the_field('secondary_talk_title');?>
																		    	</p>
																		    	
																		    	<p class="talk__date talk__date--secondary">
																			    	<?php the_field('secondary_talk_date');?>
																		    	</p>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								
								<?php endwhile; ?>
	
								<?php else: ?>
	
								<!-- article -->
								<article>
	
								<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
	
								</article>
								<!-- /article -->
	
								<?php endif; ?>

								
							</div>
						
					</div>	
					<?php
						return ob_get_clean();
}
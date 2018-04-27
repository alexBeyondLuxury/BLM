<?php
/*
Plugin Name: Previous Speakers
Description: Displays previous speakers with the "previous_speakers_shortcode" shortcode
Author: Alex Hooper
Version: 1.0
License: GPL version 2 or later - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
*/

function previousSpeaker() {

    $labels = array(
        'name'                  => _x( 'Previous Speakers', 'Post Type General Name', 'fire' ),
        'singular_name'         => _x( 'Previous Speaker', 'Post Type Singular Name', 'fire' ),
        'menu_name'             => __( 'Previous Speakers', 'fire' ),
        'name_admin_bar'        => __( 'Previous Speakers', 'fire' ),
        'archives'              => __( 'Previous Speaker Archives', 'fire' ),
        'parent_item_colon'     => __( 'Parent Item:', 'fire' ),
        'all_items'             => __( 'All Previous Speakers', 'fire' ),
        'add_new_item'          => __( 'Add New Previous Speaker', 'fire' ),
        'add_new'               => __( 'Add New', 'fire' ),
        'new_item'              => __( 'New Previous Speaker', 'fire' ),
        'edit_item'             => __( 'Edit Previous Speaker', 'fire' ),
        'update_item'           => __( 'Update Previous Speaker', 'fire' ),
        'view_item'             => __( 'View Previous Speaker', 'fire' ),
        'search_items'          => __( 'Search Previous Speakers', 'fire' ),
        'not_found'             => __( 'Not found', 'fire' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'fire' ),
        'featured_image'        => __( 'Previous Speaker Image', 'fire' ),
        'set_featured_image'    => __( 'Set Previous Speaker image', 'fire' ),
        'remove_featured_image' => __( 'Remove Previous Speaker image', 'fire' ),
        'use_featured_image'    => __( 'Use as Previous Speaker image', 'fire' ),
        'insert_into_item'      => __( 'Insert into Previous Speaker', 'fire' ),
        'uploaded_to_this_item' => __( 'Uploaded to this Previous Speaker', 'fire' ),
        'items_list'            => __( 'Previous Speaker list', 'fire' ),
        'items_list_navigation' => __( 'Previous Speaker list navigation', 'fire' ),
        'filter_items_list'     => __( 'Filter Previous Speaker list', 'fire' ),
    );
    $args = array(
        'label'                 => __( 'Previous Speakers', 'fire' ),
        'description'           => __( 'Custom post type for Previous Speakers.', 'fire' ),
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
    register_post_type( 'previousSpeaker', $args );

}


function previous_speakers_shortcode() {
    ob_start();
    
    $paged = get_query_var( 'paged', 0 );

    ?>
	<div class="hide--speakers">
		<div class="speaker__items speaker__items--previous u-margin-bottom-large">
			<div class="speaker__items__sizer"></div>
			<?php
				$args = array(
                'post_type' => 'previousSpeaker',
                'posts_per_page' => 8,
                'paged' => $paged,
                'orderby' => 'title', // we will sort posts by date
                'order'	=> 'ASC'
				);
				
				$the_query = new WP_Query($args);
			?>
			<?php if ($the_query->have_posts() ): while ($the_query->have_posts() ) :$the_query->the_post(); ?>
			<div class="speaker__item speaker__item--shown speaker__item--collapsed">
				<div>
					<div class="speaker__item__detail speaker__item-detail speaker__item-detail--basic">
						<div class="speaker__item-detail__shadow">
							<div class=" speaker__item-detail__summary" style="background-image: linear-gradient(to bottom, rgba(153,153,153,0) 0%,rgba(0,0,0,0.32) 100%), url(<?php the_field('p_image');?>); background-position: 50% 50%;">&nbsp;</div>
							<div class="speaker__item-detail__summary__text">
								<h3 class=" speaker__item-detail__heading "><?php the_field('p_name');?></h3>
								<div class=" speaker__item-detail__tag ">
									<p><?php the_field('job_title');?> <?php the_field('p_company');?></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>				
			<?php endwhile; ?>
        </div>
    </div>
		<div class="speaker--previous--button"><a class="ajax_button" data-page="1" data-postCount="<?php echo $the_query->found_posts;?>" data-url="<?php echo admin_url('admin-ajax.php'); ?>">LOAD MORE PAST SPEAKERS</a></div>
		<?php else: ?>
		<!-- article -->
		<article>
	        <h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
		</article>
		<!-- /article -->
		<?php endif; ?>	
	<?php
		return ob_get_clean();
}

function ajax_button() {
    //Load more posts
    $paged = $_POST["page"]+1; // grabs the current page of the post 

    $query = new WP_Query(array(
        'post_type' => 'previousSpeaker',
        'paged' => $paged,
        'posts_per_page' => 8,
        'orderby' => 'title', // we will sort posts by date
		'order'	=> 'ASC' // ASC или DESC
    ));

    if( $query->have_posts() ) :
		while( $query->have_posts() ): $query->the_post(); ?>
        <div class="speaker__item speaker__item--shown speaker__item--collapsed">
        <div>
            <div class="speaker__item__detail speaker__item-detail speaker__item-detail--basic">
                <div class="speaker__item-detail__shadow">
                <div class=" speaker__item-detail__summary" style="background-image: linear-gradient(to bottom, rgba(153,153,153,0) 0%,rgba(0,0,0,0.32) 100%), url(<?php the_field('p_image');?>); background-position: 50% 50%;">&nbsp;</div>
                    <div class="speaker__item-detail__summary__text">
                        <h3 class=" speaker__item-detail__heading "><?php the_field('p_name');?></h3>
                        <div class=" speaker__item-detail__tag ">
                            <p><?php the_field('job_title');?> <?php the_field('p_company');?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
			<?php
            
        endwhile;
        wp_reset_postdata();
    endif;
    die(); // PHP AJAX function always must die at the end
}
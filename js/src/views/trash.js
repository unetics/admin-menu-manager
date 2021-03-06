var CollectionView = require( 'views/collectionview' );

var Trash = CollectionView.extend( {
	tagName:   'ul',
	id:        'admin-menu-manager-trash',
	className: 'dashicons-before dashicons-trash',

	/**
	 * Initialize the trashed admin menu.
	 *
	 * @class AdminMenu
	 * @augments Backbone.View
	 * @constructs AdminMenu object
	 */
	initialize: function( options ) {
		CollectionView.prototype.initialize.apply( this, [ options ] );

		this.collection.reset( AdminMenuManager.trash );
	}

} );

module.exports = Trash;

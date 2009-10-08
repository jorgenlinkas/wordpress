function WPSetAsThumbnail(id){
	jQuery('#media-item-' + id + ' > a.wp-post-thumbnail').text( setPostThumbnailL10n.saving ).attr('href', '#');
	jQuery.post(ajaxurl, {
		action:"set-post-thumbnail", post_id: post_id, thumbnail_id: id, cookie: encodeURIComponent(document.cookie)
	}, function(str){
		var win = window.dialogArguments || opener || parent || top;
		if ( str == '0' ) {
			alert( setPostThumbnailL10n.error );
			win.cwsCloseTB();
		} else {
			jQuery('a.wp-post-thumbnail').text( setPostThumbnailL10n.setThumbnail );
			jQuery('#media-item-' + id + ' > a.wp-post-thumbnail').hide();
			win.WPSetThumbnailID(id);
			win.WPSetThumbnailHTML(str);
			win.WPCloseTB();
		}
	}
	);
}
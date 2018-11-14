/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.footer_scripts-field.metabox', 'carbon-fields/metaboxes', ( OriginalTextareaField ) => withField( OriginalTextareaField ) );

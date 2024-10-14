var BEN = BEN || {};var $ = jQuery || {};(function ($, undefined) {  })(jQuery);var BEN = BEN || {};var $ = jQuery || {};(function ($, undefined) {  })(jQuery);var BEN = BEN || {};var $ = jQuery || {};BEN.navigatePrevPost = function(event) {event.preventDefault();var $elem = $(event.target);var $form = $(event.target).closest('form');$.ajax({method: 'post',url: ben.ajax_url,data: {action: 'navigate_prev_post',current_post_id: $form.find('input[name="ben-current-post-id"]').val(),current_post_type: $form.find('input[name="ben-current-post-type"]').val(),is_classic_editor: $form.find('input[name="ben-classic-editor"]').val(),},beforeSend: function () { },success: function (data, status, jqxhr) {var guid = JSON.parse(data);if (guid === '') {window.alert("You have reached either the first or last post! Try again in the opposite direction.");} else {document.location = guid;}}});};BEN.navigateNextPost = function(event) {event.preventDefault();var $elem = $(event.target);var $form = $(event.target).closest('form');$.ajax({method: 'post',url: ben.ajax_url,data: {action: 'navigate_next_post',current_post_id: $form.find('input[name="ben-current-post-id"]').val(),current_post_type: $form.find('input[name="ben-current-post-type"]').val(),is_classic_editor: $form.find('input[name="ben-classic-editor"]').val(),},beforeSend: function () { },success: function (data, status, jqxhr) {var guid = JSON.parse(data);if (guid === '') {window.alert("You have reached either the first or last post! Try again in the opposite direction.");} else {document.location = guid;}}});};(function ($, undefined) {  $(document).on('click', '.ben-prev-post', BEN.navigatePrevPost);$(document).on('click', '.ben-next-post', BEN.navigateNextPost);})(jQuery);var BEN = BEN || {};var $ = jQuery || {};BEN.toggleSearchBox = function(event) {event.preventDefault();var $elem = $(event.target);var $form = $(event.target).closest('form');$('.search-group').toggleClass('d-none').toggleClass('d-block');};BEN.autocompleteSearchBox = function(event) {var $elem = $(event.target);var $form = $(event.target).closest('form');$.ajax({method: 'post',url: ben.ajax_url,data: {action: 'navigation_search',search_input_text: $form.find('input[name="ben-search-autocomplete"]').val(),current_post_type: $form.find('input[name="ben-current-post-type"]').val(),is_classic_editor: $form.find('input[name="ben-classic-editor"]').val(),},beforeSend: function () { },success: function (data, status, jqxhr) {var results = JSON.parse(data);var html    = '';$.each(results, function(idx, results) {html += `<li data-guid="${results.guid}">${results.title}</li>`;});if (html) {$('.search-results').toggleClass('d-none').toggleClass('d-block');$('.search-results').empty().html(html)}}});};BEN.addSearchResultToInput = function(event) {event.preventDefault();var $elem = $(event.target);var $form = $(event.target).closest('form');var guid  = $elem.data('guid');if ($elem.data('guid') !== 0) {$('input[name="ben-search-autocomplete"]').empty().val($elem.text());$elem.closest('ul').toggleClass('d-none').toggleClass('d-block');if (guid === '') {window.alert("Something unexpected happend! Contact the plugin developer.");} else {document.location = guid;}}};(function ($, undefined) {  $(document).on('click', '.ben-open-search-box', BEN.toggleSearchBox);$(document).on('click', '.search-results li', BEN.addSearchResultToInput);$(document).on('keyup', 'input[name="ben-search-autocomplete"]', BEN.autocompleteSearchBox);})(jQuery);(function(wp) {var el                         = wp.element.createElement;var Fragment                   = wp.element.Fragment;var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;var registerPlugin             = wp.plugins.registerPlugin;var dataSelect                 = wp.data.select("core/editor");registerPlugin('block-editor-navigator-controls', {icon: '',render: function() {return el(Fragment,{},el(PluginDocumentSettingPanel, {name: 'block-editor-navigator-sidebar',title: 'Navigator Controls',className: 'ben-block-editor-ui'},el('div', {dangerouslySetInnerHTML: {__html: `<div class="ben"><div class="ben-block-editor-ui"><p>Block editor navigator will take you to your desired Post/Page without the need to navigate back to the main page.</p><form name="ben-block-editor" id="ben-block-editor" type="post"><input type="hidden" name="ben-current-post-type" id="ben-current-post-type" value="` + dataSelect.getCurrentPostType() + `"><input type="hidden" name="ben-current-post-id" id="ben-current-post-id" value="` + dataSelect.getCurrentPostId() + `"><input type="hidden" name="ben-classic-editor" id="ben-classic-editor" value="0"><div class="button-group"><p><button class="components-button is-primary ben-prev-post" title="Previous Post..."><i class="dashicons dashicons-arrow-left-alt2"></i> Previous</button> <button class="components-button is-primary ben-next-post" title="Next Post...">Next <i class="dashicons dashicons-arrow-right-alt2"></i></button><button class="components-button is-primary ben-open-search-box"><i class="dashicons dashicons-search"></i> Search</button></p></div><div class="search-group d-none"><input type="text" name="ben-search-autocomplete" id="ben-search-autocomplete" class="components-text-control__input ben-search-autocomplete" value="" placeholder="Start typing to see the results..." /><ul class="search-results d-none"></ul></div></form></div></div>`}}),),);},});})(window.wp);
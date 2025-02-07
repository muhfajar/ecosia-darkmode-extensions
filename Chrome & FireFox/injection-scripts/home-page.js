// Initial injection - checks if dark mode is enabled.
chrome.storage.local.get(["darkMode"], injectOnLoad);

function injectOnLoad(items){
    if (items["darkMode"] != 'off') {
		(document.body || document.head || document.documentElement).appendChild(style);
	}
}

// Subscribe to other necessary events.
document.addEventListener('DOMContentLoaded', changeStyleImportance, false);
chrome.runtime.onMessage.addListener(toggleStyle);
 
// Moves style tag to the head once the document has loaded.
function changeStyleImportance(){
	document.removeEventListener('DOMContentLoaded', changeStyleImportance, false);
	
	var darkModeElement = document.getElementById('EcosiaDarkMode');
	if (darkModeElement != null) {
		document.getElementsByTagName('head')[0].appendChild(darkModeElement);
	}
}

// Toggle style on/off when toggle is activated.
function toggleStyle(message, sender, sendResponse) {
	if (message.action == 'on') {
		document.getElementsByTagName("head")[0].appendChild(style);
	}
	else if (message.action == 'off') {
		var element = document.getElementById('EcosiaDarkMode');
		element.parentElement.removeChild(element);
	}
}

var style = document.createElement('style');
style.id = "EcosiaDarkMode";
style.className = "EcosiaDarkMode";
style.type = "text/css";
style.textContent = `/* ---------------------------------------- */
/* HOMEPAGE - The main Ecosia homepage only */
/* ---------------------------------------- */

/* MAIN STYLING */
/* Main content */
body {
    background: var(--dark-background);
}
.search-section .content {
    background: linear-gradient(var(--dark-background), var(--dark-background) 90%, hsla(0, 0%, 100%, 0)) bottom no-repeat !important;
}
.search-section .content, .search-section .content h2 {
    color: var(--text);
}
.map-section {
    color: var(--text);
}
.claims-section {
    color: var(--text);
}
.land-background:after {
    background: linear-gradient(rgba(0, 0, 0, 0) 80%, var(--dark-background)) bottom no-repeat, url(https://index-assets-cdn.ecosia.org/img/5a18884.png) bottom repeat-x !important;
}
.info-section > .background {
    color: var(--lighter-background);
    background: var(--dark-background);
}
.info-section > .content {
    color: var(--text);
}
.claim.card {
    box-shadow: 0 0px 7px 0 rgba(255, 255, 255, 0.2);
    background: var(--form);
}
.container, .search-section__content, .above-fold-cta-section {
    background: var(--dark-background) !important;
    color: var(--text) !important;
}
.info-section__content, h2 {
    color: var(--text) !important;
}
.info-section__background path {
    color: var(--form) !important;
}

/* Logo */
.logo > svg > g > path:nth-child(2) {
    fill: white;
}

/* Notifications */
.popup a {
    background: var(--form) !important;
    color: var(--text) !important;
}
.popup {
    border: 1px solid;
}

/* Notifications banner */
.banner {
	background: var(--form) !important;
}
.banner__content {
	color: var(--text) !important;
}
.banner__close:hover::after {
	background: var(--form);
}
.banner__close {
	background: var(--lighter-background) !important;
}
/* ---------- */


/* MENU BUTTONS */
/* Menu buttons */
.index-header button {
    background: var(--dark-background) !important;
}
.index-header button:hover, .main-nav button:focus {
    background: var(--lighter-background) !important;
}
.notifications button:hover path, .main-nav button:hover path, .notifications button:focus path, .main-nav button:focus path {
    fill: var(--text) !important;
}
.personal-counter span {
    color: var(--text) !important;
}
.personal-counter-content__notify {
    color: var(--link);
}

/* Tree dropdown */
.personal-counter__dropdown {
    background: var(--form) !important;
}

/* Notifications dropdown */
.notifications-dropdown {
    border: 1px solid var(--lighter-background) !important;
    background: var(--dark-background) !important;
}
.notifications a {
    background: var(--form) !important;
    color: var(--text) !important;
}
.notifications a:hover {
    background: var(--lighter-background) !important;
    color: var(--text) !important;
}

/* Burger dropdown */
.main-nav-menu {
    background: var(--form);
    color: var(--text);
    border: 1px solid var(--lighter-background);
}
.main-nav-menu li:hover {
    background: var(--lighter-background) !important;
}
/* ---------- */


/* SEARCH BAR */
/* Search form */
[aria-label="Search Form"] {
    background: #272727 !important;
    color: var(--text) !important;
}

/* Typeahead */
.suggestion-list {
    background: var(--form) !important;
}
.search-form__suggestions li {
    background: var(--form) !important;
}
.search-form__suggestions li:hover {
    background: var(--lighter-background) !important;
}
.search-form__suggestions a {
    color: var(--text) !important;
}

/* MOBILE MODE */
/* Sidebar */
.panel__content {
	background: var(--form) !important;
}

/* ----------------------------------------------------------------------- */
/* UNIVERSAL CODE - Code used between pages -> scrollbar, variables etc... */
/* ----------------------------------------------------------------------- */

* {
    border-color: var(--border) !important; 
    scrollbar-color: #3F3F3F #1C1E1F;
    --dark-background: #181A1B;
    --form: #1F1F1F;
    --border: #595959;
    --text: #CCCCCC;
    --link: #6E9BF4;
    --link-visited: #CF70FF;
    --link-green: #71D89A;
    --lighter-background: #3F3F3F;
}
:focus {
    outline: 0;
}

/* Logo */
[aria-label="Ecosia logo"] path:nth-child(2) {
    fill: white;
}
.land-background path {
    fill: var(--dark-background);
}

/* Footer */
footer {
    background: var(--form) !important;
}

/* Scrollbar Chrome */
::-webkit-scrollbar {
    width: 15px;
}
::-webkit-scrollbar-track {
    background: #2a2a2a;
}
::-webkit-scrollbar-thumb:hover {
    background: #868686;
}
::-webkit-scrollbar-thumb {
    background: #626262;
}

::-moz-selection, ::selection {
    background: #696969;
}


/* Applying all other pages for styling fix */

/* ------------------------------------------------------- */
/* SEARCH ENGINE - The main Ecosia search engine & results */
/* ------------------------------------------------------- */

/* Change 'applies to' so that it only applies to results */


/* MAIN BACKGROUND */
body {
    background: var(--dark-background);
}
.search-header, .navbar-row, .results-wrapper {
    background: var(--dark-background) !important;
}

/* Background fix for 'Add Ecosia to Chrome' button */
.col-lg-4 .margin-top-base {
    background: var(--dark-background);
}
/* ---------- */


/* LOGO & SEARCH BAR */
/* Normal logo */
.logo-anchor path:nth-child(2) {
    fill: white;
}

/* Search bar */
.search-box .search-form-field {
    background: #292929;
}
.search-form input {
    color: var(--text) !important;
}
.search-form-button:focus svg path {
    fill: #767676;
}
.search-form-button:hover svg path {
    fill: #adadad;
}

/* Typeahead suggestions */
.typeahead {
    background: var(--form);
    box-shadow: 0 0px 5px 0 rgba(255, 255, 255, 0.15), 0 0px 4px 0 rgba(255, 255, 255, 0.15);
}
.typeahead a {
    color: var(--text);
}
.typeahead a:hover {
    background: var(--lighter-background);
    color: var(--text);
}
.typeahead a:visited {
    color: #8d8d8d;
}
/* ---------- */


/* NAVBAR */
/* Main navbar style */
.navbar-container a, .navbar-container a:visited {
    color: var(--text);
}
.navbar-container a:hover {
    color: #36acb8;
}
.navbar-container button {
    color: var(--text);
}

/* Navbar dropdowns */
.icons-dropdown-list li:hover {
    background: var(--lighter-background);
}
.icons-dropdown-list li:hover a, .icons-dropdown-list a:focus, .icons-dropdown-list a:active {
    color: var(--text);
}
[data-track-id="more_wikipedia"] path, [data-track-id="more_amazon"] path {
    fill: var(--text);
}

/* Filters & settings */
.flags-dropdown {
    color: var(--text);
}
.flags-dropdown-chosen {
    background: var(--form);
}
.flags-dropdown li:hover {
    background: var(--lighter-background);
}
.filter-list, .filter-list > li:focus, .filter-list a, .filter-trigger {
    background: var(--form);
    color: var(--text) !important;
}
.filter-list a:hover, .filter-list .active a {
    background: var(--lighter-background) !important;
}
.filter-trigger:hover {
    color: #8d8d8d !important;
}
/* ---------- */

/* MENU BUTTONS */
/* Tree-counter, menu main styling */
.search-header-menu-group button {
    background: var(--dark-background) !important;
}
.search-header-menu-group button:hover {
    background: var(--lighter-background) !important;
}
.notifications-center button:hover path, .notifications-center.is-open path, .search-header-dropdown button:hover path, .search-header-dropdown.is-open path {
    fill: var(--text) !important;
}
.pill-text {
    color: var(--text) !important;
}
.pill {
    background: var(--main-background-color) !important;
}

/* Tree-counter popover */
#treeCountPopover {
    background: var(--form);
    border: 1px solid;
    color: var(--text);
}

/* Notifications center */
.notifications-center-container {
    background: var(--form);
    border: 1px solid;
}
.notifications-item, .notifications-item:active, .notifications-item:focus, .notifications-item:visited {
    background: var(--form);
    color: var(--text) !important;
}
.notifications-item:hover {
    background: var(--lighter-background);
    color: var(--text);
}
.dropdown-footer-simple {
    background: var(--form);
}

/* Dropdown menu */
.dropdown-menu {
    background: var(--form);
    border-bottom: 1px solid;
    border-left: 1px solid;
    border-right: 1px solid;
}
.dropdown-link {
    color: var(--text) !important;
}
.dropdown-item:hover {
    background: var(--lighter-background);
}
/* ---------- */


/* RESULTS */
/* Main text result color */
.result-title, .result-title:hover, .result-title:focus {
    color: var(--link);
}
.result-title:visited {
    color: var(--link-visited);
}
.result-url, .result-url:hover, .result-url:visited, .result-url:focus {
    color: var(--link-green);
}
.result-snippet, .query-context-text, .no-results {
    color: var(--text);
}

/* Text results extra media */
.card-web .result-media .result-url {
    background: var(--form);
    border: 1px solid var(--lighter-background);
}
.result-media .thumbnail-title, .result-media-video .thumbnail-title:hover {
    color: var(--link);
}
.result-media .result-url:visited .thumbnail-title {
    color: var(--link-visited);
}
.result-media .thumbnail-publisher {
    color: var(--link-green);
}
.callout-with-image {
	background-color: var(--form) !important;
	color: var(--text) !important;
	border: 1px solid var(--border);
}
[title="Wikipedia"] path {
    fill: #CCCCCC !important;
}

/* Extra results buttons */
.result-media .slider-control {
    background: #272727;
    box-shadow: 0 0px 5px 0 rgba(255, 255, 255, 0.15), 0 0px 3px 0 rgba(255, 255, 255, 0.15);
}
.icon-button:hover {
    color: var(--text) !important;
    background: var(--lighter-background);
}
.icon-button:focus {
    color: #828282;
}

/* More results links */
.more-results-link, .more-results-link:hover, .more-results-link:visited, .more-results-link:focus {
    color: var(--link);
}
.more-results-link:visited {
    color: var(--link-visited);
}

/* Results footer */
.pagination-button:hover, .pagination-button.active, .small-footer-link:hover {
    color: var(--text);
}

/* Image results */
.image-result {
    border-color: var(--dark-background) !important;
}

/* Climate impact */
.entity-extra {
    color: var(--text);
}
.entity-extra::before {
    border-color: var(--border);
}
/* ---------- */


/* INLINE WIDGETS */
.card-news li, .card-videos li {
    background: var(--form);
    border: 1px solid;
}
.widget-container {
    border: 1px solid;
}
.widget-container div {
    background: var(--form);
    color: var(--text);
}

/* Flights */
.card-flights {
    background: var(--form);
    border: 1px solid;
}
.card-flights div, .card-flights input {
    background: var(--form) !important;
    color: var(--text);
}
.bpk-button, .ReferralButton__cta___2Yxt0 {
    background: var(--form) !important;
    color: var(--text) !important;
}

/* Polluter */
.highlighted-domain-hint-wrapper .popover {
    border: 1px solid !important;
    background: #272727 !important;
}
.highlighted-domain-hint-wrapper .popover-text {
    color: var(--text);
}
/* ---------- */


/* MOBILE */
/* Main results */
.mainline-results .result, .results-page-stretcher {
    background: var(--dark-background);
}
.search-form-addon .search-form-addon-button {
    background: var(--dark-background);
    color: var(--text);
}

/* Hamburger & tree counter */
.popover-mobile {
    background: var(--form);
    color: var(--text);
}
.popover-treecounter {
    border: 1px solid;
}
.offcanvas-menu-header {
    background: var(--form);
}

/* Maps & more */
.card-desktop .card-mobile {
    background: var(--dark-background);
}
.navbar-item.hidden-desktop .navbar-link {
    color: var(--text);
}
.container.hidden-desktop .row div {
    background: var(--form);
}
#moreLinks.hidden-desktop li {
    background: var(--form);
}
#moreLinks.hidden-desktop li:hover {
    background: var(--lighter-background);
}
#moreLinks.hidden-desktop a {
    color: var(--text);
}
#mapLinks.hidden-desktop li {
    background: var(--form);
}
#mapLinks.hidden-desktop li:hover {
    background: var(--lighter-background);
}
#mapLinks.hidden-desktop a {
    color: var(--text);
}
.navbar-item-divider::before {
    border-color: var(--border);
}

/* Filters & settings */
.hidden-desktop .flags-dropdown-content {
    color: var(--text);
}
.hidden-desktop .flags-dropdown-content li:hover {
    background: var(--lighter-background);
}
/* ---------- */


/* ADVERTISEMENTS */
/* Sidebar ads */
.entity {
    border: 1px solid;
    background: var(--form);
}
.entity-disambiguation-title, .entity-disambiguation-title:hover, .entity-disambiguation-title:focus, .entity-disambiguation-title:active {
    color: var(--link);
}
.entity-description-more, .entity-description-more:hover, .entity-description-more:focus, .entity-description-more:active {
    color: var(--link);
}
.entity-disambiguation-title:visited, .entity-description-more:visited {
    color: var(--link-visited);
}
.entity-disambiguation-text, .entity-disambiguation-headline, .entity-title, .entity p {
    color: var(--text);
}
.card-top {
    background: var(--darker-background);
}

/* Sidebar shop */
.sidebar-product-ad-container {
    border: 1px solid;
    background: var(--form);
}
.sidebar-product-ad-title, .sidebar-product-ad-title:hover, .sidebar-product-ad-title:focus, .sidebar-product-ad-title:active {
    color: var(--link);
}
.sidebar-product-ad-title:visited {
    color: var(--link-visited);
}
.sidebar-product-ad-seller {
    color: var(--link-green);
}

/* Inline */
.card-productads {
    background: var(--dark-background);
}
.product-ad-heading {
    color: var(--text);
}
.product-ad li {
    background: var(--form);
    border: 1px solid;
}
.thumbnail-extra {
    color: var(--text);
}
/* ---------- */


/* MISCELLANEOUS */
/* Install add-on banner Chrome */
.serp-cta-wrapper {
    background: var(--form);
    color: var(--text);
}`;
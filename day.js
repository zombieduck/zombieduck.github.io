// Open and close the sidenav on medium and small screens
function w3_open() {
	document.getElementById("mySidenav").style.display = "block";
	document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
	document.getElementById("mySidenav").style.display = "none";
	document.getElementById("myOverlay").style.display = "none";
}

// Change style of top container on scroll
window.onscroll = function() {
	myFunction()
};
function myFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById("myTop").classList.add("w3-card-4");
		document.getElementById("myIntro").classList
				.add("w3-show-inline-block");
	} else {
		document.getElementById("myIntro").classList
				.remove("w3-show-inline-block");
		document.getElementById("myTop").classList.remove("w3-card-4");
	}
}

// Accordions
function myAccordion(id) {
	var x = document.getElementById(id);
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
		x.previousElementSibling.className += " w3-theme";
	} else {
		x.className = x.className.replace("w3-show", "");
		x.previousElementSibling.className = x.previousElementSibling.className
				.replace(" w3-theme", "");
	}
}
$(document).ready(function() {
	CheckScript('ModuleView');
	CheckScript('Mustache');
});
$(document)
		.ready(
				function() {
					var DomainID = '26';
					var PageID = '45';
					var RenderLoc = '0';
					var MIID = '6034';

					// added to check to make sure moderated content doesn't
					// bleed through the dialog
					if ($('#dialog-overlay-WindowLargeModal-body.moderateContent').length > 0) {
						$("#module-content-" + MIID).find(".ui-widget-detail")
								.find(".ui-article").append("<p>&nbsp;</p>");
					}
				});
$(document).ready(function() {
});
function LoadGroupedData(container, MIID, PMI, groupYear, groupMonth, groupBy,
		tag) {
	// ViewToUse looks at the hidden Sidebar List View defined in the Builder
	// View.
	var viewToUse = "";
	if ($('#hid-' + MIID + '-SidebarListView').length > 0) {
		viewToUse = $("#hid-" + MIID + "-SidebarListView").val();
	}
	;
	GetContent(
			'http://www.newton.k12.ma.us//cms/UserControls/ModuleView/ModuleViewRendererWrapper.aspx?DomainID=26&PageID=45&ModuleInstanceID='
					+ MIID
					+ '&PageModuleInstanceID='
					+ PMI
					+ '&RenderLoc=0&FromRenderLoc=0&GroupYear='
					+ groupYear
					+ '&GroupMonth='
					+ groupMonth
					+ '&GroupByField='
					+ groupBy
					+ '&EnableQuirksMode=0&ViewID=' + viewToUse + '&Tag=' + tag,
			container, 2, 'chkSidebar();');
}
function LoadData(container, MIID, PMI, flexDataID, groupYear, groupMonth,
		groupBy, targetView, tag) {
	if (targetView !== undefined || targetView.Length() == 0) {
		// targetView looks at the hidden Detail View defined in the Builder
		// View.
		targetView = $('#hid-' + MIID + '-DetailView').val();
	}
	GetContent(
			'http://www.newton.k12.ma.us//cms/UserControls/ModuleView/ModuleViewRendererWrapper.aspx?DomainID=26&PageID=45&ModuleInstanceID='
					+ MIID
					+ '&PageModuleInstanceID='
					+ PMI
					+ '&FlexDataID='
					+ flexDataID
					+ '&GroupYear='
					+ groupYear
					+ '&GroupMonth='
					+ groupMonth
					+ '&GroupByField='
					+ groupBy
					+ '&RenderLoc=0&FromRenderLoc=0&EnableQuirksMode=0&Tag='
					+ tag + '&ViewID=' + targetView, container, 2,
			'chkSidebar();');
}
function LoadTaggedData(container, MIID, PMI, tag) {
	// ViewToUse looks at the hidden Sidebar List View defined in the Builder
	// View.
	var viewToUse = "";
	if ($('#hid-' + MIID + '-SidebarListView').length > 0) {
		viewToUse = $("#hid-" + MIID + "-SidebarListView").val();
	}
	;
	GetContent(
			'http://www.newton.k12.ma.us//cms/UserControls/ModuleView/ModuleViewRendererWrapper.aspx?DomainID=26&PageID=45&ModuleInstanceID='
					+ MIID
					+ '&PageModuleInstanceID='
					+ PMI
					+ '&RenderLoc=0&FromRenderLoc=0&Tag='
					+ tag
					+ '&EnableQuirksMode=0&ViewID=' + viewToUse, container, 2,
			'chkSidebar();');
}
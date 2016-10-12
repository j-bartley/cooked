

getProjectGUID = function() {
    return '23c802c7-124f-4af1-a8a6-962c643a4dd7';
};

function navigateTo(outcome, useAjax) {
 navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    setDetailContent(pageUrl);
}

AppPages = [{
    "name": "startScreen_clone_1",
    "location": "startScreen_clone_1.html"
}, {
    "name": "startScreen_clone_2",
    "location": "startScreen_clone_2.html"
}, {
    "name": "upload",
    "location": "upload.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}];

function startScreen_clone_1_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobileselectmenu_8': 'startScreen_clone_1_mobileselectmenu_8',
        'mobileselectmenu_8-0': 'startScreen_clone_1_mobileselectmenu_8-0',
        'mobileimage_17': 'startScreen_clone_1_mobileimage_17',
        'mobileimage_18': 'startScreen_clone_1_mobileimage_18',
        'mobiletextarea_12': 'startScreen_clone_1_mobiletextarea_12',
        'mobiletextarea_14': 'startScreen_clone_1_mobiletextarea_14',
        'mobiletextarea_15': 'startScreen_clone_1_mobiletextarea_15',
        'mobilebutton_16': 'startScreen_clone_1_mobilebutton_16'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    mappings = mappings || {};

    datasources = datasources || {};

    CurrentScreen = 'startScreen_clone_1';
    _.chain(mappings).filter(function(m) {
        return m.homeScreen === CurrentScreen;
    }).each(UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var startScreen_clone_1_onLoad = function() {
            startScreen_clone_1_elementsExtraJS();

            startScreen_clone_1_deviceEvents();
            startScreen_clone_1_windowEvents();
            startScreen_clone_1_elementsEvents();
        };

    // screen window events


    function startScreen_clone_1_windowEvents() {

        $('#startScreen_clone_1').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function startScreen_clone_1_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function startScreen_clone_1_elementsExtraJS() {
        // screen (startScreen_clone_1) extra code

        /* mobileselectmenu_8 */

        $("#startScreen_clone_1_mobileselectmenu_8").parent().find("a.ui-btn").attr("tabindex", "5");

    };

    // screen elements handler


    function startScreen_clone_1_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#startScreen_clone_1_mobilecontainer [name="mobilebutton_16"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    navigateTo('startScreen_clone_2', {
                        reverse: false
                    });

                }
            },
        }, '#startScreen_clone_1_mobilecontainer [name="mobilebutton_16"]');

    };

    $(document).off("pagebeforeshow", "#startScreen_clone_1").on("pagebeforeshow", "#startScreen_clone_1", function(event, ui) {
        CurrentScreen = "startScreen_clone_1";
        _.chain(mappings).filter(function(m) {
            return m.homeScreen === CurrentScreen;
        }).each(UIHandler.hideTemplateComponents);
    });

    startScreen_clone_1_onLoad();
};

$(document).off("pagecreate", "#startScreen_clone_1").on("pagecreate", "#startScreen_clone_1", function(event, ui) {
    processSelectMenu($(this));
    startScreen_clone_1_js();
});

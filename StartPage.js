

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

function startScreen_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_3': 'startScreen_mobilebutton_3',
        'mobilebutton_4': 'startScreen_mobilebutton_4'
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

    CurrentScreen = 'startScreen';
    _.chain(mappings).filter(function(m) {
        return m.homeScreen === CurrentScreen;
    }).each(UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var startScreen_onLoad = function() {
            startScreen_elementsExtraJS();

            startScreen_deviceEvents();
            startScreen_windowEvents();
            startScreen_elementsEvents();
        };

    // screen window events


    function startScreen_windowEvents() {

        $('#startScreen').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function startScreen_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function startScreen_elementsExtraJS() {
        // screen (startScreen) extra code

    };

    // screen elements handler


    function startScreen_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#startScreen_mobilecontainer [name="mobilebutton_3"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    navigateTo('startScreen_clone_1', {
                        reverse: false
                    });

                }
            },
        }, '#startScreen_mobilecontainer [name="mobilebutton_3"]');

    };

    $(document).off("pagebeforeshow", "#startScreen").on("pagebeforeshow", "#startScreen", function(event, ui) {
        CurrentScreen = "startScreen";
        _.chain(mappings).filter(function(m) {
            return m.homeScreen === CurrentScreen;
        }).each(UIHandler.hideTemplateComponents);
    });

    startScreen_onLoad();
};

$(document).off("pagecreate", "#startScreen").on("pagecreate", "#startScreen", function(event, ui) {
    processSelectMenu($(this));
    startScreen_js();
});

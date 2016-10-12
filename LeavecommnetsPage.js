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

function startScreen_clone_2_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobileselectmenu_8': 'startScreen_clone_2_mobileselectmenu_8',
        'mobileselectmenu_8-0': 'startScreen_clone_2_mobileselectmenu_8-0',
        'mobileimage_18': 'startScreen_clone_2_mobileimage_18',
        'mobileimage_17': 'startScreen_clone_2_mobileimage_17',
        'mobiletextarea_19': 'startScreen_clone_2_mobiletextarea_19',
        'mobilebutton_20': 'startScreen_clone_2_mobilebutton_20'
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

    CurrentScreen = 'startScreen_clone_2';
    _.chain(mappings).filter(function(m) {
        return m.homeScreen === CurrentScreen;
    }).each(UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var startScreen_clone_2_onLoad = function() {
            startScreen_clone_2_elementsExtraJS();

            startScreen_clone_2_deviceEvents();
            startScreen_clone_2_windowEvents();
            startScreen_clone_2_elementsEvents();
        };

    // screen window events


    function startScreen_clone_2_windowEvents() {

        $('#startScreen_clone_2').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function startScreen_clone_2_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function startScreen_clone_2_elementsExtraJS() {
        // screen (startScreen_clone_2) extra code

        /* mobileselectmenu_8 */

        $("#startScreen_clone_2_mobileselectmenu_8").parent().find("a.ui-btn").attr("tabindex", "5");

    };

    // screen elements handler


    function startScreen_clone_2_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#startScreen_clone_2_mobilecontainer [name="mobilebutton_20"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    alert;
                    "Thanks for your comments";;
                    navigateTo('startScreen', {
                        reverse: false
                    });

                }
            },
        }, '#startScreen_clone_2_mobilecontainer [name="mobilebutton_20"]');

    };

    $(document).off("pagebeforeshow", "#startScreen_clone_2").on("pagebeforeshow", "#startScreen_clone_2", function(event, ui) {
        CurrentScreen = "startScreen_clone_2";
        _.chain(mappings).filter(function(m) {
            return m.homeScreen === CurrentScreen;
        }).each(UIHandler.hideTemplateComponents);
    });

    startScreen_clone_2_onLoad();
};

$(doprocessSelectMenu($(this));
    startScreen_clone_2_js();
});

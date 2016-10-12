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

function upload_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'photo': 'upload_photo',
        'mobilebutton_4': 'upload_mobilebutton_4',
        'mobilelabel_5': 'upload_mobilelabel_5',
        'mobiletextarea_12': 'upload_mobiletextarea_12',
        'mobilebutton_13': 'upload_mobilebutton_13',
        'mobilenavbar_7': 'upload_mobilenavbar_7',
        'mobilenavbaritem_8': 'upload_mobilenavbaritem_8'
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

    mappings["upload_camera2_onbeforesend_mapping_0"] = {
        "homeScreen": "upload",
        "directions": [

        {

            "to_name": "camera2",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "data": {
                    "quality": 80,
                    "destinationType": "Data URL",
                    "sourceType": "Camera",
                    "allowEdit": true,
                    "encodingType": "JPEG",
                    "targetWidth": 1024,
                    "targetHeight": 768
                }
            },

            "mappings": []
        }

        ]
    };

    mappings["upload_camera2_onsuccess_mapping_0"] = {
        "homeScreen": "upload",
        "directions": [

        {
            "from_name": "camera2",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "upload",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['data']['imageDataBase64']",
                "target": "$['photo:image']"

            }

            ]
        },

        {
            "from_name": "camera2",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "image_base64_0",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$['data']['imageDataBase64']",
                "target": "$"

            }

            ]
        }

        ]
    };

    mappings["upload_new_web_upload_onbeforesend_mapping_0"] = {
        "homeScreen": "upload",
        "directions": [

        {

            "to_name": "new_web_upload",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Database-Id": "{database_id}",
                    "X-Master-Key": "{database_master_key}"
                },
                "parameters": {},
                "body": null
            },

            "mappings": []
        }

        ]
    };

    mappings["upload_new_web_upload_onsuccess_mapping_0"] = {
        "homeScreen": "upload",
        "directions": []
    };

    datasources = datasources || {};

    window.camera2 = datasources.camera2 = new DataSource(CameraService_Picture_Upload_App, {
        "onBeforeSend": function(jqXHR) {
            processMappingAction(mappings["upload_camera2_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            processMappingAction(mappings["upload_camera2_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.new_web_upload = datasources.new_web_upload = new DataSource(FileUpload_service_Picture_Upload_App, {
                                                                                 
        "onBeforeSend": function(jqXHR) {
           processMappingAction(mappings["upload_new_web_upload_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
           processMappingAction(mappings["upload_new_web_upload_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

      CurrentScreen = 'upload';
    _.chain(mappings).filter(function(m) {
        return m.homeScreen === CurrentScreen;
    }).each(UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var upload_onLoad = function() {
            upload_elementsExtraJS();

            upload_deviceEvents();
            upload_windowEvents();
            upload_elementsEvents();
        };

    // screen window events


    function upload_windowEvents() {

        $('#upload').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#upload').on({
            pageshow: function(event) {
                ("photo").attr("src", storage.image_base64.get());
            },
        });

    };

    // device events


    function upload_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function upload_elementsExtraJS() {
        // screen (upload) extra code

    };

    // screen elements handler


    function upload_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#upload_mobilecontainer [name="mobilebutton_4"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    uploadBinaryHelper(new_web_upload, storage.image_base64.get());

                }
            },
        }, '#upload_mobilecontainer [name="mobilebutton_4"]');

        $(document).off("click", '#upload_mobilecontainer [name="mobilebutton_13"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    alert;
                    "thanks for your post";;
                    navigateTo('startScreen', {
                        reverse: false
                    });

                }
            },
        }, '#upload_mobilecontainer [name="mobilebutton_13"]');

        $(document).off("click", '#upload_mobilefooter [name="mobilenavbaritem_8"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    if (isCordovaApp()) {
                        camera2.execute({});
                    } else {
                        alert('Camera service available only when app is installed on the device as binary.');
                    };

                }
            },
        }, '#upload_mobilefooter [name="mobilenavbaritem_8"]');

    };

    $(document).off("pagebeforeshow", "#upload").on("pagebeforeshow", "#upload", function(event, ui) {
        CurrentScreen = "upload";
        _.chain(mappings).filter(function(m) {
            return m.homeScreen === CurrentScreen;
        }).each(UIHandler.hideTemplateComponents);
    });

    upload_onLoad();
};

$(document).off("pagecreate", "#upload").on("pagecreate", "#upload", function(event, ui) {
    processSelectMenu($(this));
    upload_js();
});



window.lazyLoadOptions = {
    elements_selector: "img[data-lazy-src],.rocket-lazyload,iframe[data-lazy-src]",
    data_src: "lazy-src",
    data_srcset: "lazy-srcset",
    data_sizes: "lazy-sizes",
    class_loading: "lazyloading",
    class_loaded: "lazyloaded",
    threshold: 300,
    callback_loaded: function(element) {
        if ( element.tagName === "IFRAME" && element.dataset.rocketLazyload == "fitvidscompatible" ) {
            if (element.classList.contains("lazyloaded") ) {
                if (typeof window.jQuery != "undefined") {
                    if (jQuery.fn.fitVids) {
                        jQuery(element).parent().fitVids();
                    }
                }
            }
        }
    }};


    window.addEventListener('LazyLoad::Initialized', function (e) {
    var lazyLoadInstance = e.detail.instance;

    if (window.MutationObserver) {
        var observer = new MutationObserver(function(mutations) {
            var image_count = 0;
            var iframe_count = 0;
            var rocketlazy_count = 0;

            mutations.forEach(function(mutation) {
                for (i = 0; i < mutation.addedNodes.length; i++) {
                    if (typeof mutation.addedNodes[i].getElementsByTagName !== 'function') {
                        return;
                    }

                if (typeof mutation.addedNodes[i].getElementsByClassName !== 'function') {
                        return;
                    }

                    images = mutation.addedNodes[i].getElementsByTagName('img');
                    is_image = mutation.addedNodes[i].tagName == "IMG";
                    iframes = mutation.addedNodes[i].getElementsByTagName('iframe');
                    is_iframe = mutation.addedNodes[i].tagName == "IFRAME";
                    rocket_lazy = mutation.addedNodes[i].getElementsByClassName('rocket-lazyload');

                    image_count += images.length;
                    iframe_count += iframes.length;
                    rocketlazy_count += rocket_lazy.length;
                    
                    if(is_image){
                        image_count += 1;
                    }

                    if(is_iframe){
                        iframe_count += 1;
                    }
                }
            } );

            if(image_count > 0 || iframe_count > 0 || rocketlazy_count > 0){
                lazyLoadInstance.update();
            }
        } );
        
        var b      = document.getElementsByTagName("body")[0];
        var config = { childList: true, subtree: true };
        
        observer.observe(b, config);
    }
}, false);

var sticky_anything_engage = {
    "element":".sticky-sidebar",
    "topspace":"0",
    "minscreenwidth":"0",
    "maxscreenwidth":"999999",
    "zindex":"1",
    "legacymode":"",
    "dynamicmode":"",
    "debugmode":"",
    "pushup":"",
    "adminbar":"1"
};


var flatsomeVars = {
    "ajaxurl":"https:\/\/aircooleradvisor.org\/wp-admin\/admin-ajax.php",
    "rtl":"",
    "sticky_height":"70",
    "user":{
        "can_edit_pages":false
    }
};

var wpcf7 = {
    "apiSettings":{
        "root":"https:\/\/aircooleradvisor.org\/wp-json\/contact-form-7\/v1",
        "namespace":"contact-form-7\/v1"
    },"recaptcha":{
        "messages":{
            "empty":"Please verify that you are not a robot."
        }
    },
    "cached":"1"
};



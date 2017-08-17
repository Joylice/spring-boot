/**
 * Created by zhe on 8/2/16.
 */
(function (window) {
    var wrapper = document.createElement("div");
    wrapper.id = "loader-wrapper";
    var loader = document.createElement("div");
    loader.id = "loader";
    wrapper.appendChild(loader);
    var head = document.getElementsByTagName("head")[0];
    document.getElementsByTagName("html")[0].insertBefore(wrapper, head);

    var link = document.createElement("link");
    link.setAttribute("href", "loader/loader.css");
    link.setAttribute("rel", "stylesheet");
    var headChildren = head.childNodes;
    if (headChildren.length > 1) {
        head.insertBefore(link, headChildren[0]);
    } else {
        head.appendChild(link);
    }
    window.onload = function () {
        wrapper.style.display = "none";
    };
})(window);
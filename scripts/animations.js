// SLIDE IN ANIMATION
$(document).on("scroll", () => {
    var page_top = $(document).scrollTop();
    var page_bottom = page_top + $(window).height();

    var slide_in_objs = $("._slide_in");

    for(var cur_obj = 0; cur_obj < slide_in_objs.length; cur_obj++) {
        var obj = slide_in_objs[cur_obj];

        if ($(obj).position().top < page_bottom) {
            $(obj).addClass("_visible");
          } else {
            $(obj).removeClass("_visible");
          }
    }
});
//  DEMO CARASEL ANIMATION
var current_demo = 0
var demo_list = [
    "files/skill/bloo idle animation.gif",
    "files/skill/bloo jumping animation.gif",
    "files/skill/ship flying and shoot.gif"
]
function demoSwitch() {
    var skill_demo = $("#Demo");    
    $(skill_demo).attr("src", demo_list[current_demo]);
    current_demo = (current_demo + 1) % demo_list.length
}

$(document).ready(()=> {
    demoSwitch();
    setInterval(demoSwitch, 5000);
});

function cutExtension(src) {
    return src.substring(0, src.indexOf("."));
}
function cutLeadingURL(src) {
    return src.substring(src.lastIndexOf('/') + 1);
}
// MODAL ZOOM IN ANIMATION
var modal = $("#Modal")
var skill_demo = $("#Demo");

$(skill_demo).on("click", () => {
    var modal_img = $("#ModalImage");
    var caption = $("#Caption");

    $(modal).css("display", "block");
    var src_text = $(skill_demo).attr("src");
    $(modal_img).attr("src", src_text);
    $(caption).text(cutLeadingURL(cutExtension(src_text)).toUpperCase());
});

$("._close").on("click", function() {
    $(modal).css("display","none");
});

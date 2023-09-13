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
    "ghosa-cute.gif",
    "bloo_sprite_idle.gif"
]
function demoSwitch() {
    var skill_demo = $("#Demo");
    var demo = "files/skill/" + demo_list[current_demo];
    
    $(skill_demo).attr("src", demo);
    current_demo = (current_demo + 1) % demo_list.length
}

$(document).ready(()=> {
    setInterval(demoSwitch, 5000);
});

// MODAL ZOOM IN ANIMATION
var modal = $("#Modal")
var skill_demo = $("#Demo");

$(skill_demo).on("click", () => {
    var modal_img = $("#ModalImage");
    var caption = $("#Caption");

    $(modal).css("display", "block");
    $(modal_img).attr("src", $(skill_demo).attr("src"));
    $(caption).text($(skill_demo).attr("alt"));
});

$("._close").on("click", function() {
    $(modal).css("display","none");
});

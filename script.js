$(document).ready(function () {

    console.log("jQuery is ready!");

    $("h2").css("border-bottom", "2px solid #0077b6");

    $("#greeting").text("Hey there! I'm Adilzhan");

    $(".headline").css("letter-spacing", "1px");

    $("#btn-light").click(function () {
        $("body").removeClass("dark");
    });

    $("#btn-dark").click(function () {
        $("body").addClass("dark");
    });

    $("#btn-hide").click(function () {
        $("#fun-facts").hide();
    });

    $("#btn-show").click(function () {
        $("#fun-facts").show();
    });

    $("#btn-toggle").click(function () {
        $("#fun-facts").toggle();
    });

    $(".fade-btn").click(function () {
        var action = $(this).data("action");
        var images = $(".gallery-item img");

        if (action === "fadeIn") {
            images.fadeIn(600);
        } else if (action === "fadeOut") {
            images.fadeOut(600);
        } else {
            images.fadeToggle(600);
        }
    });

    $(".accordion-heading").click(function () {
        $(this).next(".accordion-panel").slideToggle(350);
    });

    $("#btn-append").click(function () {
        var skill = $("#skill-input").val().trim();
        if (skill === "") {
            alert("Please enter a skill name.");
            return;
        }
        $("#skills-list").append("<li>" + skill + "</li>");
        $("#skill-input").val("");
    });

    $("#btn-prepend").click(function () {
        var skill = $("#skill-input").val().trim();
        if (skill === "") {
            alert("Please enter a skill name.");
            return;
        }
        $("#skills-list").prepend("<li>" + skill + "</li>");
        $("#skill-input").val("");
    });

    $("#btn-remove").click(function () {
        $("#skills-list li:last").remove();
    });

    $("#btn-github").click(function () {
        $("#social-link").attr("href", "https://github.com").text("My GitHub");
    });

    $("#btn-linkedin").click(function () {
        $("#social-link").attr("href", "https://linkedin.com").text("My LinkedIn");
    });

    $("#input-name").on("input", function () {
        var val = $(this).val();
        $("#out-name").text(val || "—");
    });

    $("#input-email").on("input", function () {
        var val = $(this).val();
        $("#out-email").text(val || "—");
    });

    var barsExpanded = false;

    $("#btn-animate").click(function () {
        if (!barsExpanded) {
            $(".bar-fill").each(function () {
                var target = $(this).data("width");
                $(this).animate({ width: target }, 800);
            });
            barsExpanded = true;
        } else {
            $(".bar-fill").animate({ width: "0%" }, 800);
            barsExpanded = false;
        }
    });

});

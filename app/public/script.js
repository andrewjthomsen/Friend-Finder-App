$("#submit-btn").on("click", function (event) {
    event.preventDefault();
    var userAnswers = {
        name: $("#nombre").val() + ' ' + $('#last_nombre').val(),
        scores: [$("#question1").val(), $("#question2").val(), $("#question3").val(), $("#question4").val(), $("#question5").val(),
            $("#question6").val(), $("#question7").val(), $("#question8").val(), $("#question9").val(), $("#question10").val()
        ]
    };
    $.post("/api/friends", userAnswers, function (data) {
        console.log("I am posted");
        $("#matchName").text(data.name)
        $("#match-img").attr("src", data.photo)
        // $("#match-img").attr("id", "matchPhoto")
    });

});
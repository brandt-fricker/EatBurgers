// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".delete").on("click", function (e) {
    e.preventDefault();
    const id = $(this).attr("data-id");
    $.ajax({
      url: "/api/burgers/" + id,
      method: "DELETE",
    }).then(function () {
      location.reload();
    });
  });
  
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devour: newDevour,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function () {
      console.log("changed sleep to", newDevour);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devour: $("[name=devour]:checked").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".change-fin").on("click", function(event) {

    var id = $(this).data("id");
    var newfin = $(this).data("newfin");

    var newfinState = {
      finish: newfin
    };

    // Send the PUT request.
    $.ajax("/api/plans/" + id, {
      type: "PUT",
      data: newfinState
    }).then(
      function() {
        console.log("changed finish to", newfin);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newplan = {
      subject: $("#ca").val().trim(),
      finish: 0
    };

    console.log(newplan)

    // Send the POST request.
    $.ajax("/api/plans", {
      type: "POST",
      data: newplan
    }).then(
      function() {
        console.log("created new plan");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-plan").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/plans/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted plan", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

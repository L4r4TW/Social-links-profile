// script.js

document.addEventListener("keydown", function (event) {
  // List of buttons
  const buttons = document.querySelectorAll(".button-link");

  // Get the index of the currently focused button
  const focusedButtonIndex = Array.from(buttons).indexOf(
    document.activeElement
  );

  if (event.key === "ArrowDown") {
    // Move to the next button (down arrow key)
    const nextIndex = (focusedButtonIndex + 1) % buttons.length;
    buttons[nextIndex].focus();
    event.preventDefault(); // Prevent default behavior (scrolling, etc.)
  } else if (event.key === "ArrowUp") {
    // Move to the previous button (up arrow key)
    const prevIndex =
      (focusedButtonIndex - 1 + buttons.length) % buttons.length;
    buttons[prevIndex].focus();
    event.preventDefault(); // Prevent default behavior
  }
});

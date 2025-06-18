export function initTimeButton() {
  const button = document.getElementById("check-btn");
  let isCheckedIn = false;

  if (!button) return;

  button.addEventListener("click", () => {
    const time =
      document.getElementById("time")?.innerHTML ||
      new Date().toLocaleTimeString();

    const message = isCheckedIn
      ? `Check out at ${time}?`
      : `Check in at ${time}?`;
    const userConfirmed = confirm(message);

    if (userConfirmed) {
      isCheckedIn = !isCheckedIn;

      if (isCheckedIn) {
        button.innerHTML = `<i class="bi bi-box-arrow-left fs-5"></i> Check Out`;
        button.classList.remove("btn-primary");
        button.classList.add("btn-danger");
        console.log("User checked in");
      } else {
        button.innerHTML = `<i class="bi bi-box-arrow-in-right fs-5"></i> Check In`;
        button.classList.remove("btn-danger");
        button.classList.add("btn-primary");
        console.log("User checked out");
      }
    } else {
      console.log("Operation canceled by user");
    }
  });
}

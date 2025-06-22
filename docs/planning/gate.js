
const password = prompt("Enter password:");
if (password !== "acadia") {
  document.body.innerHTML = "<h2 style='text-align:center;'>Access Denied</h2>";
}

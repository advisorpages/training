if (!sessionStorage.getItem("unlocked")) {
  const password = prompt("Enter password:");
  if (password === "acadia") {
    sessionStorage.setItem("unlocked", "true");
  } else {
    document.body.innerHTML = "<h2 style='text-align:center;'>Access Denied</h2>";
  }
}
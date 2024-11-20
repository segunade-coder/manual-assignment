let LINK_CLICKED = false;
const input = document.getElementById("adm");

input.addEventListener("input", function () {
  // Ensure the value has at most 3 digits
  if (this.value.length > 3) {
    this.value = this.value.slice(0, 3);
  }
});

input.addEventListener("keydown", function (e) {
  // Prevent entering more digits if 3 digits are already present
  if (this.value.length >= 3 && e.key >= "0" && e.key <= "9") {
    e.preventDefault();
  }
});
input.addEventListener("wheel", function (event) {
  event.preventDefault();
});
document
  .getElementById("student-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const adm = document.getElementById("adm").value;
    const program = document.getElementById("program").value;
    const phone = document.getElementById("phone").value;
    const button = document.querySelector(".submit");
    const params = new URLSearchParams(window.location.search);

    const ref = params.get("ref") || null;
    if (!name && !adm && !program && !phone) {
      alert("Fill in all fields");
      return;
    }
    if (!LINK_CLICKED) {
      return alert("Please click on the link to join the WhatsApp group");
    }
    button.innerHTML = "Loading...";
    const response = await fetch("/students", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name, adm, phone, program, ref }),
    });
    button.innerHTML = "Submit";
    if (response.ok) {
      document.getElementById("name").value = "";
      document.getElementById("adm").value = "";
      document.getElementById("program").value = "M";
      document.getElementById("phone").value = "";
      LINK_CLICKED = false;
      window.location.href = `./success.html?adm=${adm}`;
    } else {
      LINK_CLICKED = false;
      window.location.href = "./error.html";
    }
  });
document.querySelector(".whatsapp").addEventListener("click", (e) => {
  LINK_CLICKED = true;
  window.open(
    "https://chat.whatsapp.com/K7177w3ixTG23UIXP5Sj36",
    "_blank",
    "noreferrer"
  );
});

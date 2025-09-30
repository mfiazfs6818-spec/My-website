document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // page reload ko rokta hai
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        alert("✅ Thank you! Your message has been sent successfully.");
        form.reset(); // form fields clear ho jayenge
      } else {
        alert("❌ Oops! Something went wrong, please try again.");
      }
    } catch (error) {
      alert("⚠️ Network error, please check your connection.");
    }
  });
});

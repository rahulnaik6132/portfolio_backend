console.log("Script Loaded");

// CONTACT FORM SUBMIT HANDLER
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      name: this.name.value,
      email: this.email.value,
      subject: this.subject.value,
      message: this.message.value
    };

    try {
      const res = await fetch("https://portfolio-backend-rqmh.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        alert("Message Sent Successfully!");
        this.reset();
      } else {
        alert("Error sending message!");
      }
    } catch (err) {
      alert("Network Error!");
      console.error(err);
    }
  });
}

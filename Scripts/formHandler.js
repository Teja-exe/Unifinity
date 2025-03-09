export async function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const statusMessage = document.getElementById("status-message");

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (!statusMessage) return;

        if (response.ok && result.success) {
            localStorage.setItem("formSubmitted", "true"); // Store state in local storage
            statusMessage.textContent = result.success;
            statusMessage.style.color = "green";
            form.reset(); 
        } else {
            statusMessage.textContent = result.error || "Something went wrong. Please try again.";
            statusMessage.style.color = "red";
        }
    } catch (error) {
        if (statusMessage) {
            statusMessage.textContent = "An unexpected error occurred. Please try again.";
            statusMessage.style.color = "red";
        }
        console.error("Form submission error:", error);
    }
}

// Check local storage on page load to avoid form reset issue
window.addEventListener("DOMContentLoaded", () => {
    const statusMessage = document.getElementById("status-message");
    if (localStorage.getItem("formSubmitted") === "true") {
        if (statusMessage) {
            statusMessage.textContent = "Your message has already been sent.";
            statusMessage.style.color = "green";
        }
    }
});

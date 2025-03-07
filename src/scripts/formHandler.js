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

        if (!statusMessage) return; // Ensure the element exists before updating it

        if (response.ok && result.success) {
            statusMessage.textContent = result.success;
            statusMessage.style.color = "green";
            form.reset(); // Clear the form on success
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

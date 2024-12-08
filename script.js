const form = document.getElementById("contactForm");

form.addEventListener("submit", async(event) => {
    event.preventDefault(); // Cegah aksi default

    const formData = new FormData(form); // Mengumpulkan data

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            alert("Your message has been sent successfully!");
            form.reset(); // Me-reset Form
        } else {
            alert("There was an error sending your message. Please try again.");
        }
    } catch (error) {
        alert("An error occurred. Please check your connection and try again.");
    }
});

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden")
});

document.getElementById('menu-icon').addEventListener('click', function() {
    const menuList = document.getElementById('menu-list');
    menuList.classList.toggle('show'); // Tambahkan atau hapus class 'show'
});
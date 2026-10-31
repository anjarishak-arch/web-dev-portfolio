const yearelement =
document.getElementById("year");

if (yearElement) {
    yearElement.textContent = newDate().getFullYear();

    const sections = documents.querySelectorAll(".section, .hero-content");

    const observer = new 
    IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );
    section.forEach((section) => {
        section.classList.add("reveala");
        observer.observer(section);
    })
}
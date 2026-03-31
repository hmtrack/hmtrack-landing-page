const yearElement = document.getElementById("year");
const leadForm = document.getElementById("leadForm");
const feedback = document.getElementById("formFeedback");

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(leadForm);
    const nome = String(formData.get("nome") || "").trim();

    feedback.textContent = `Obrigado, ${nome || "cliente"}! Recebemos seus dados e entraremos em contato em breve.`;
    leadForm.reset();
  });
}

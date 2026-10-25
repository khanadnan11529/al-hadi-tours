import "./WhatsAppButton.css";

function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Al-Hadi Tours & Travels, I would like to know more about your services."
  );

  return (
    <a
      href={`https://wa.me/919167493183?text=${message}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Al-Hadi on WhatsApp"
    >
      <span className="whatsapp-icon">◉</span>

      <span className="whatsapp-text">
        Chat with us
      </span>
    </a>
  );
}

export default WhatsAppButton;
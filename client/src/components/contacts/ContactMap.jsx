import "../../styles/ContactMap.css";

const ContactMap = () => {
  return (
    <section className="contact-map">
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2093.4930497265104!2d-122.40860109081413!3d37.78511364412907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085fddbb56b%3A0x418b7b5da2ae8798!2s870%20Market%20St%20%23%20928%2C%20San%20Francisco%2C%20CA%2094102%2C%20USA!5e0!3m2!1sen!2szw!4v1730103625219!5m2!1sen!2szw"
          allowfullscreen=""
          loading="lazy"
          className="map"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;

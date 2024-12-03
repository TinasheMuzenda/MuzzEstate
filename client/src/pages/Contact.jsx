import ContactBanner from "../components/contacts/ContactBanner";
import ContactInformation from "../components/contacts/ContactInformation";
import ContactMap from "../components/contacts/ContactMap";
import Header from "../components/Header";

const Contact = () => {
  return (
    <main>
      <Header />
      <ContactBanner />
      <ContactInformation />
      <ContactMap />
    </main>
  );
};

export default Contact;

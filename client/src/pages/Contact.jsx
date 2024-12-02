import ContactBanner from "../components/contacts/ContactBanner";
import ContactInformation from "../components/contacts/ContactInformation";
import ContactMap from "../components/contacts/ContactMap";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  return (
    <main>
      <Header />
      <ContactBanner />
      <ContactInformation />
      <ContactMap />
      <Footer />
    </main>
  );
};

export default Contact;

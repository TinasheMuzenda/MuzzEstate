import Header from "../components/Header";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <Header />
      <main className="story">
        <div className="container">
          <h1>
            Our <span>Story</span>
          </h1>
          <div className="about-paragraphs">
            <div className="paragraph p1">
              <h3>Welcome to Muzz Estate: Where Vision Meets Value</h3>
              <p>
                In the heart of Harare, Muzz Estate is revolutionizing the
                property landscape with affordable, exceptional and innovative
                spaces. Our vision is to transform the way people live, work and
                connect. We breathe new life into neglected properties, crafting
                vibrant commercial and residential hubs that bring people
                together. From warehouses to land, our expertise spans the
                entire spectrum of property development.
              </p>
            </div>
            <div className="paragraph">
              <h3>Building Communities, Not Just Buildings</h3>
              <p>
                At Muzz Estate, we believe that properties should inspire and
                uplift. That is why we are dedicated to creating spaces that
                foster connection, community and growth. Our developments are
                designed to provide more than just a place to live or work -
                they offer a lifestyle. With communal spaces, innovative
                amenities and a commitment to sustainability, we are redefining
                the African property landscape. Join us in building a brighter
                future, where everyone has access to quality properties that
                enhance their lives.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;

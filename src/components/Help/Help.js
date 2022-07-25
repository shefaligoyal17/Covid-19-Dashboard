import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Help.module.css";

const Help = () => {
  return (
    <Container fluid className={styles.Main}>
      <h3 className={styles.Head}>Useful Links for COVID-19</h3>
      <Row>
        <Col md={6}>
          <Col>
            <div className={styles.Div}>
              <p>Italy</p>
              <a href="https://www.federasmaeallergie.org/sitoFA/">
                https://www.federasmaeallergie.org/sitoFA/
              </a>
            </div>
          </Col>
          <Col>
            <div className={styles.Div}>
              <p>Europe</p>
              <a href="https://www.federasmaeallergie.org/sitoFA/">
                https://www.federasmaeallergie.org/sitoFA/
              </a>
            </div>
          </Col>
          <Col>
            <div className={styles.Div}>
              <p>Spain</p>
              <ul>
                <li>
                  <a href="https://www.separ.es/node/1705 ">
                    https://www.separ.es/node/1705{" "}
                  </a>{" "}
                </li>
                <li>
                  <a href="http://www.seicap.es/es ">
                    http://www.seicap.es/es{" "}
                  </a>{" "}
                </li>
                <li>
                  <a href="https://enfamilia.aeped.es/temas-salud/recomendaciones-sociedad-espanola-cardiologia-pediatrica ">
                    https://enfamilia.aeped.es/temas-salud/recomendaciones-sociedad-espanola-cardiologia-pediatrica{" "}
                  </a>{" "}
                </li>
                <li>
                  <a href="https://www.seaic.org/inicio/sala-de-prensa/coronavirus-e-inmunodeficiencias-primarias.html">
                    https://www.seaic.org/inicio/sala-de-prensa/coronavirus-e-inmunodeficiencias-primarias.html
                  </a>{" "}
                </li>
              </ul>
            </div>
          </Col>
        </Col>
        <Col md={6}>
          <Col>
            <div className={styles.Div}>
              <p>France</p>
              <ul>
                <li>
                  <a href="https://sante-respiratoire.com/category/actualites/ ">
                    https://sante-respiratoire.com/category/actualites/{" "}
                  </a>
                </li>
                <li>
                  <a href="https://www.lesouffle.org/">
                    https://www.lesouffle.org/
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className={styles.Div}>
              <p>Germany</p>
              <a href="https://www.daab.de/">https://www.daab.de/</a>
            </div>
          </Col>
          <Col>
            <div className={styles.Div}>
              <p>UK</p>
              <a href="https://www.blf.org.uk/support-for-you/coronavirus">
                https://www.blf.org.uk/support-for-you/coronavirus
              </a>
            </div>
          </Col>
          <Col>
            <div className={styles.Div}>
              <p>United States</p>
              <ul>
                <li>
                  <a href="https://coronavirus.jhu.edu/">
                    https://coronavirus.jhu.edu/
                  </a>
                </li>
                <li>
                  <a href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/asthma.html">
                    https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/asthma.html
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Col>
      </Row>
      <div className={styles.DivDonate}>
        <h3>Donation</h3>
        <div>
          <ul>
            <li>
              <a href="https://www.pmindia.gov.in/en/?query#">PM Cares</a>
            </li>
            <li>
              <a href="https://indiafightscorona.giveindia.org/support-families/">
                GIVE INDIA
              </a>
            </li>
            <li>
              <a href="http://www.seedsindia.org/covid19/">SEEDS</a>
            </li>
            <li>
              <a href="https://give4good.org.in/covid-19-donate">
                Charities And Foundation
              </a>
            </li>
            <li>
              <a href="https://www.unitedwaymumbai.org/fight-covid">
                United Way
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.WHO}>
        <h3>
          <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
            World Health Organisation
          </a>
        </h3>
        <h4>Resources</h4>
        <ul>
          <li>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
              Public Advice
            </a>
          </li>
          <li>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/travel-advice">
              Travel advice
            </a>
          </li>
          <li>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/media-resources/press-briefings">
              Media Resources
            </a>
          </li>
          <li>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/">
              Situation Reports
            </a>
          </li>
          <li>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters">
              Myth Busters
            </a>
          </li>
          <li>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/technical-guidance">
              Country and Technical Guidance
            </a>
          </li>
          <li>
            <a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">
              Your questions answered
            </a>
          </li>
          <li>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/media-resources/press-briefings">
              Research and Development
            </a>
          </li>
          <li>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen">
              Rolling Updates on coronavirus disease
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Help;

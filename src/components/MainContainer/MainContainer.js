import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Collection from "../../containers/Collection/Collection";
import RecoveryRatio from "../../containers/RecoveryRatio/RecoveryRatio";
import styles from "./MainContainer.module.css";
import Search from "../../containers/Search/Search";
import Twitter from "../../components/Tweets/TryTweets";
import NewsAndUpdates from "../../components/NewsAndUpdates/NewsAndUpdates";
import Map from "../../components/Map/Map";
import SpreadGraph from "../../containers/SpreadGraph/SpreadGraph";

const MainContainer = () => {
  return (
    <Container fluid>
      <Row noGutters={true}>
        <Col md={12} lg={9}>
          <Row noGutters={true}>
            <Col md={12} lg={12}>
              <Collection />
            </Col>
            <Col className={styles.CountrywiseCases} md={12} lg={4}>
              <Search />
            </Col>
            <Col md={12} lg={8}>
              <Map />
            </Col>
            <Col md={6} lg={6}>
              <SpreadGraph />
            </Col>
            <Col md={6} lg={6}>
              <NewsAndUpdates />
            </Col>
          </Row>
        </Col>
        <Col md={12} lg={3}>
          <Row noGutters={true}>
            <Col md={6} lg={12}>
              <RecoveryRatio />
            </Col>
            <Col md={6} lg={12}>
              <Twitter />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContainer;

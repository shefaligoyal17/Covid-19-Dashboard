import React from "react";
import styles from "./Links.module.css";

const Links = () => {
  return (
    <div className={styles.Links}>
      <h3 className={styles.FirstHeading}>Updates Regarding COVID-19</h3>
      <div className={styles.Row}>
        <div className={styles.SingleVideo}>
          <iframe
            className={styles.Video}
            title="updates"
            src="https://www.youtube.com/embed/pKu8Bzq64iY"
          ></iframe>
          <p>5 Symptoms of Corona Virus that you should know</p>
        </div>
        <div className={styles.SingleVideo}>
          <iframe
            className={styles.Video}
            title="updates"
            src="https://www.youtube.com/embed/QH1eXvmyYMk"
          ></iframe>
          <p>Precautions to be taken to avoid corona virus</p>
        </div>
      </div>
      <div className={styles.Row}>
        <div className={styles.SingleVideo}>
          <iframe
            className={styles.Video}
            title="updates"
            src="https://www.youtube.com/embed/9qXZhG7I4qo"
          ></iframe>
          <p>Common myths about corona virus and it's prevention</p>
        </div>
        <div className={styles.SingleVideo}>
          <iframe
            className={styles.Video}
            title="updates"
            src="https://www.youtube.com/embed/nsXMtSmAMWc"
          ></iframe>
          <p>Things to do when in quarantine</p>
        </div>
      </div>
      <h3 className={styles.SecondHeading}>Latest News about COVID-19</h3>
      <div className={styles.Row}>
        <div className={styles.SingleVideo}>
          <iframe
            className={styles.Video}
            title="news"
            src="https://www.youtube.com/embed/-Mk2BZRJvrw"
          ></iframe>
          <p>Extension of lockdown in some states of India</p>
        </div>
        <div className={styles.SingleVideo}>
          <iframe
            className={styles.Video}
            title="news"
            src="https://www.youtube.com/embed/OKvi-2_o6y0"
          ></iframe>
          <p>PM Narendra Modi addressing the nation for the fifth time</p>
        </div>
      </div>
      <div className={styles.Row}>
        <div className={styles.SingleVideo}>
          <iframe
            className={styles.Video}
            title="news"
            src="https://www.youtube.com/embed/_-P-rUOPz_s"
          ></iframe>
          <p>CoronaVirus Outbreak</p>
        </div>
        <div className={styles.SingleVideo}>
          <iframe
            className={styles.Video}
            title="news"
            src="https://www.youtube.com/embed/yL2WiojSFVk"
          ></iframe>
          <p>How France is deeply impacted by CoronaVirus</p>
        </div>
      </div>
      {/* <h3>
            Some more helpful links..
            </h3>
            <NavLink to="https://www.lchcnet.org/coronavirusFAQ">CoronaVirus FAQ</NavLink> */}
    </div>
  );
};

export default Links;

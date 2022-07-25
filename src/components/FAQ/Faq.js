import React from "react";
import styles from "./Faq.module.css";
const Faq = () => {
  return (
    <div className={styles.Faq}>
      <h1>Frequently asked questions on COVID-19 </h1>
      <div className={styles.QuestionsDiv1}>
        <p className={styles.Questions}> What is corona virus?</p>
        <p className={styles.Answers}>
          Coronaviruses are a large family of viruses which may cause illness in
          animals or humans. In humans, several coronaviruses are known to cause
          respiratory infections ranging from the common cold to more severe
          diseases such as Middle East Respiratory Syndrome (MERS) and Severe
          Acute Respiratory Syndrome (SARS). The most recently discovered
          coronavirus causes coronavirus disease COVID-19.
        </p>
      </div>
      <div className={styles.QuestionsDiv2}>
        <p className={styles.Questions}>What are the symptoms of COVID-19?</p>
        <p className={styles.Answers}>
          The most common symptoms of COVID-19 are fever, tiredness, and dry
          cough. Some patients may have aches and pains, nasal congestion, runny
          nose, sore throat or diarrhea. These symptoms are usually mild and
          begin gradually. Some people become infected but don’t develop any
          symptoms and don't feel unwell. Most people (about 80%) recover from
          the disease without needing special treatment. Around 1 out of every 6
          people who gets COVID-19 becomes seriously ill and develops difficulty
          breathing. Older people, and those with underlying medical problems
          like high blood pressure, heart problems or diabetes, are more likely
          to develop serious illness. People with fever, cough and difficulty
          breathing should seek medical attention.
        </p>
      </div>
      <div className={styles.QuestionsDiv1}>
        <p className={styles.Questions}>How does COVID-19 spread?</p>
        <p className={styles.Answers}>
          People can catch COVID-19 from others who have the virus. The disease
          can spread from person to person through small droplets from the nose
          or mouth which are spread when a person with COVID-19 coughs or
          exhales. These droplets land on objects and surfaces around the
          person. Other people then catch COVID-19 by touching these objects or
          surfaces, then touching their eyes, nose or mouth. People can also
          catch COVID-19 if they breathe in droplets from a person with COVID-19
          who coughs out or exhales droplets. This is why it is important to
          stay more than 1 meter (3 feet) away from a person who is sick.{" "}
        </p>
      </div>
      <div className={styles.QuestionsDiv2}>
        <p className={styles.Questions}>
          What can I do to protect myself and prevent the spread of disease?
        </p>
        <p className={styles.Subheading}>Protection measures for everyone:- </p>
        <p className={styles.Answers}>
          Stay aware of the latest information on the COVID-19 outbreak,
          available on the national,state and local public health authority.
          Many countries around the world have seen cases of COVID-19 and
          several have seen outbreaks. Authorities in China and some other
          countries have succeeded in slowing or stopping their outbreaks.
          However, the situation is unpredictable so check regularly for the
          latest news.{" "}
        </p>
        <p className={styles.Answers}>
          You can reduce your chances of being infected or spreading COVID19 by
          taking some simple precautions:{" "}
        </p>
        <ul>
          <li>
            {" "}
            Regularly and thoroughly clean your hands with an alcoholbased hand
            rub or wash them with soap and water. Why? Washing your hands with
            soap and water or using alcohol-based hand rub kills viruses that
            may be on your hands.
          </li>
          <li>
            Maintain at least 1 metre (3 feet) distance between yourself and
            anyone who is coughing or sneezing. Why? When someone coughs or
            sneezes they spray small liquid droplets from their nose or mouth
            which may contain virus. If you are too close, you can breathe in
            the droplets, including the COVID-19 virus if the person coughing
            has the disease.
          </li>
          <li>
            Avoid touching eyes, nose and mouth. Why? Hands touch many surfaces
            and can pick up viruses. Once contaminated, hands can transfer the
            virus to your eyes, nose or mouth. From there, the virus can enter
            your body and can make you sick.
          </li>
          <li>
            Make sure you, and the people around you, follow good respiratory
            hygiene. This means covering your mouth and nose with your bent
            elbow or tissue when you cough or sneeze. Then dispose of the used
            tissue immediately. Why? Droplets spread virus. By following good
            respiratory hygiene you protect the people around you from viruses
            such as cold, flu and COVID-19.
          </li>
          <li>
            Keep up to date on the latest COVID-19 hotspots (cities or local
            areas where COVID-19 is spreading widely). If possible, avoid
            traveling to places – especially if you are an older person or have
            diabetes, heart or lung disease. Why? You have a higher chance of
            catching COVID-19 in one of these areas.
          </li>
        </ul>
      </div>
      <div className={styles.QuestionsDiv1}>
        <p className={styles.Questions}>
          Who is at risk of developing severe illness?
        </p>
        <p className={styles.Answers}>
          While we are still learning about how COVID-2019 affects people, older
          persons and persons with pre-existing medical conditions (such as high
          blood pressure, heart disease, lung disease, cancer or diabetes)
          appear to develop serious illness more often than others.{" "}
        </p>
      </div>
      <div className={styles.QuestionsDiv2}>
        <p className={styles.Questions}>
          Should I wear mask to protect myself?
        </p>
        <p className={styles.Answers}>
          Only wear a mask if you are ill with COVID-19 symptoms (especially
          coughing) or looking after someone who may have COVID-19. Disposable
          face mask can only be used once. If you are not ill or looking after
          someone who is ill then you are wasting a mask. There is a world-wide
          shortage of masks, so We urge people to use masks wisely. We advises
          rational use of medical masks to avoid unnecessary wastage of precious
          resources and mis-use of masks The most effective ways to protect
          yourself and others against COVID-19 are to frequently clean your
          hands, cover your cough with the bend of elbow or tissue and maintain
          a distance of at least 1 meter (3 feet) from people who are coughing
          or sneezing.{" "}
        </p>
      </div>
    </div>
  );
};

export default Faq;

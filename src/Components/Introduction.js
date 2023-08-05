import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="contacts">
        <div className="contact">
          <FontAwesomeIcon icon={faHome} />
          <p>Gdynia</p>
        </div>
        <div className="contact">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>Mikołaj@Swiatarchitekt.pl</p>
        </div>
        <div className="contact">
          <FontAwesomeIcon icon={faPhone} />
          <p>
            <sub>0048</sub> 609 860 020
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

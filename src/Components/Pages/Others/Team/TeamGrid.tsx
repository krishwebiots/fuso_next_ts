import CommonHeader from "@/Components/Themes/Common/CommonHeader";
import { ImagePath } from "@/Constants/Constants";
import { socialLinks } from "@/Data/Demo/Common";
import { OtherTeamData, TeamSectionDescription } from "@/Data/Pages/Others";
import RatioImage from "@/utils/RatioImage";
import { Col, Container, Row } from "reactstrap";

const TeamGrid = () => {
  return (
    <section className='team-section section-b-space'>
      <Container>
        <CommonHeader title={"Our Experts are like no other"} content={TeamSectionDescription} headClass='content-title' />
        <Row className='g-xl-5 gy-4 ratio_square'>
          {OtherTeamData.map((item, i) => {
            return (
              <Col xl={3} lg={4} sm={6} key={i}>
                <div className='team-box'>
                  <div className='overflow-hidden'>
                    <div className='team-img'>
                      <RatioImage src={`${ImagePath}/${item.image}`} alt='t-1' className='img-fluid bg-img' />
                    </div>
                  </div>
                  <div className='team-content'>
                    <div>
                      <h4>{item.name}</h4>
                      <span>{item.designation}</span>
                    </div>
                    <ul className='social-list'>
                      {socialLinks.slice(0, 3).map((social, j) => (
                        <li key={j}>
                          <a href={social.url} target='_blank'>
                            <i className={social.iconClass} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default TeamGrid;

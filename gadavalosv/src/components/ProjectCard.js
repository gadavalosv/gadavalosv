import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, startDate, endDate, onClick }) => {
    return (
        <Col size={12} sm={6} md={4} onClick={onClick}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="proj-date-info">
                        <span>{startDate} ~ {endDate}</span>
                    </div>
                </div>
            </div>
        </Col>
    )
}
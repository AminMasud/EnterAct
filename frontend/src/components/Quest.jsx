import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Quest = ({ title, description, reward, percentage }) => {
    return (
        <div className="quest">
            <div className="progress-bar">
                <CircularProgressbar value={percentage} text={`${percentage}%`}
                    styles={buildStyles({
                        rotation: 0.25,
                        strokeLinecap: 'round',
                        textSize: '25px',
                        pathTransitionDuration: 0.5,
                        pathColor: `rgba(62, 152, 199, ${percentage / 50})`,
                        textColor: 'white',
                        trailColor: 'white',
                    })}
                />
            </div>
            <div className="quest-info">
                <div className="quest-info-top">
                    <div className="user-name-image">
                        <div className="img"></div>
                        <div className="username">@user</div> {/* Temporary, you can change this later */}
                    </div>
                    <div className="three-dots">M</div>
                </div>
                <div className="quest-info-mid">
                    <p>{description}</p> {/* Real description here */}
                </div>
                <div className="quest-info-bottom">
                    <div className="rewards">{reward}</div> {/* Real reward here */}
                    <div className="btn">Go to quest</div>
                </div>
            </div>
        </div>
    )
}

export default Quest;

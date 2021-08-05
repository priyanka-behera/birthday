import React from "react";
import "./App.css";
import pic1 from './Images/pic1.jpg';
import pic2 from './Images/pic2.jpg';
import pic3 from './Images/pic3.png';
import birthday from './Images/birthday.jpg';
import birthday1 from './Images/birthday1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    Grid, Typography, Container, Step, Stepper, StepLabel, Card
} from '@material-ui/core';
export default class Maa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }
    render() {
        return (
            <div>
                <Container style={{ backgroundColor: "lightblue" }}>
                    <div data-aos="zoom-in">
                        <img src={pic2} className="img" /><br />
                        <Typography variant="h3" style={{ fontFamily: "serif", textAlign: "center", color: "brown" }}><b><i>Happy Birthday :)</i></b></Typography><br />
                        <Typography style={{ fontFamily: "serif", marginLeft: 50, fontSize: 29, textAlign: "center" }}><i>
                            Happy Birthday to the best mom in the world. You are the best gift from god who make an another god for me 
                            and you are the best things which is happened in my life. I am such a luckiest person who have the bestest and greatest mom!
                        </i></Typography>
                    </div>
                </Container>
                <Container style={{ backgroundColor: "teal" }}>
                    <h1 style={{ fontFamily: "serif", textAlign: "center" }}><i>Happy Birthday Beautiful Lady!</i></h1>
                </Container>
                <Container>
                    <div data-aos="zoom-in">
                       
                    </div>
                </Container>
                <Container>
                    <Grid container item xs={12} lg={12}>
                        <Grid item xs={12} lg={12} className="forImage">
                            <div data-aos="zoom-in">
                                <img src={pic1} className="proimg" /><br />
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={12}>
                            <div data-aos="zoom-in">
                                <Typography variant="h3" style={{ fontFamily: "serif", marginTop: "60px", textAlign: "center", backgroundColor: "#FAEBD7", borderRadius: "100px" }}><b><i>I wish you plenty of love, happiness, health, laughter, joy and wonders.</i></b></Typography><br />
                                <Typography style={{ fontFamily: "serif", fontSize: 25, textAlign: "center" }}><i>
                                Happy birthday to the best mom ever! Even if you get older every year, you get younger at your heart.
                                You are a true woman, a role model. Your femininity, understanding, care have no end.
                                 Anybody can confide in you and you’ll always cheer up. Happy birthday to you,
                                   Many many years of happiness are ahead of you!
                                </i></Typography><br />
                            </div>
                        </Grid>
                    </Grid><br />
                </Container>
                <Container>
                    <Grid container item xs={12} lg={12}>
                        <Grid item xs={12} lg={6} className="forImage">
                            <div data-aos="zoom-out-right">
                                <img src={birthday} className="projectimg" /><br />
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <div data-aos="zoom-out-left">
                                <Typography variant="h3" style={{ fontFamily: "serif", marginTop: "60px", textAlign: "center", backgroundColor: "#FAEBD7", borderRadius: "100px" }}><b><i>Happy Birthday Wonderful Women!</i></b></Typography><br />
                                <Typography style={{ fontFamily: "serif", fontSize: 35, textAlign: "center" }}><i>
                                Happy birthday! Never stop laughing and being spontaneous! 
                                The only wish I have is to see your eyes sparkling with joy always. 
                                Stay as amazing as you are now.
                                </i></Typography><br />
                            </div>
                        </Grid>
                    </Grid><br />
                </Container>
                <Container>
                    <Grid container item xs={12} lg={12}>
                        <Grid item xs={12} lg={6} className="forImage">
                            <div data-aos="zoom-out-right">
                                <img src={birthday1} className="projectimg" /><br />
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <div data-aos="zoom-out-left">
                                <Typography variant="h3" style={{ fontFamily: "serif", marginTop: "60px", textAlign: "center", backgroundColor: "#FAEBD7", borderRadius: "100px" }}><b><i>Happy Birthday Beautiful Soul :)</i></b></Typography><br />
                                <Typography style={{ fontFamily: "serif", fontSize: 27, textAlign: "center" }}><i>
                                Happy birthday to the prettiest, smartest and kindest mother on the Earth!
                                It’s a miracle, but with each passing year, you look only younger. Keep it up!
                                You are a special woman because all women give birth to ordinary children, but you gave birth to a legend! Happy birthday!
                                </i></Typography><br />
                            </div>
                        </Grid>
                    </Grid><br />
                </Container>
                
                <Container fixed style={{ background: "teal", marginTop: 100 }}>
                    <Typography variant="h5" style={{ fontFamily: "serif", textAlign: "center", color: "black" }}><i><b>Lots of Love :)</b></i></Typography>
                </Container>
            </div>
        )
    }
}
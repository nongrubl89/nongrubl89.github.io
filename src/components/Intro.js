import React from "react";
import { useSpring, animated } from "react-spring";
import { Jumbotron, Button } from "react-bootstrap";

function Intro(props) {
  const styles = useSpring({
    loop: false,
    config: { duration: 1000 },
    to: { opacity: 1 },
    // to: { opacity: 0.5 },
    from: { opacity: 0 },
    delay: 200,
  });
  return (
    <Jumbotron fluid className="d-flex align-items-center mb-0">
      {/* <Container> */}
      {props.children}
      <animated.div style={styles} className="pl-3  pt-xs-4">
        <h4 className="intro-header">Hello and Welcome!</h4>
        <p className="intro-body">
          I am an early-career, self-taught web developer with a background in
          Business Aviation. I am currently seeking opportunities in the San
          Diego area. If you'd like to work together, get in touch{" "}
          <Button
            id="button-intro"
            onClick={props.handleClickContact}
            className="bg-transparent border-0 pb-1 pl-0 pr-0 pt-0 m-0"
          >
            here
          </Button>
          .
        </p>
      </animated.div>
      {/* </Container> */}
    </Jumbotron>
  );
}

export default Intro;

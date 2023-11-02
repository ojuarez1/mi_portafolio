import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const animations = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0 },
    exit:{opacity: 0, x: -100},
}

const AnimatedPage = ({children}) => {
    return <motion.div
        variants={animations}
        initial={animations.initial}
        animate={animations.animate}
        exit={animations.exit}
        transition={{duration:1}}
    >
        {children}
    </motion.div>
}

AnimatedPage.propTypes = {
  children: PropTypes.node,
};

export default AnimatedPage
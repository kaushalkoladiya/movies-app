import React from "react";
import { motion } from "framer-motion";
import makeStyles from "@material-ui/core/styles/makeStyles";

interface ImageProps {
  path: string | undefined;
  tapDisable?: boolean;
  large?: boolean;
}

const useStyles = makeStyles((theme) => ({
  img: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
    objectFit: "cover",
  },
}));

const Image = ({ path, tapDisable, large }: ImageProps) => {
  const classes = useStyles();
  return (
    <motion.img
      className={classes.img}
      src={path}
      whileHover={{ scale: large ? 1.2 : 1.1 }}
      whileTap={!tapDisable ? { scale: 0.9 } : undefined}
      alt="poster"
    />
  );
};

export default Image;

{
  /* <Grow
in={checked}
style={{ transformOrigin: '0 0 0' }}
{...(checked ? { timeout: 1000 } : {})}
>
<Paper elevation={4} className={classes.paper}>
  <svg className={classes.svg}>
    <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
  </svg>
</Paper>
</Grow> */
}

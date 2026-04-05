import React, { useEffect, useState } from "react";
import Bar from "../Bar/Bar";
import styles from "./Card.module.css";

interface Props {
  children: React.ReactNode;
  style?: object;
  barColor?: "red" | "amber" | "blue" | "green";
}

const Card = (props: Props) => {
  let { style, children, barColor } = props;

  return (
    <div style={{ ...style }} className={styles.cardContainer}>
      {children}
      <Bar color={barColor}></Bar>
    </div>
  );
};

export default Card;

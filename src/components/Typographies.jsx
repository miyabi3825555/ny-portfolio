import React from "react";
import { Divider, Typography } from "antd";
import "../styles.css";

const { Title, Paragraph, Text, Link } = Typography;

export const Typographies = (props) => {
  return (
    <Typography>
      <Title>Introduction</Title>
      <Paragraph>here is Introduction of this web site</Paragraph>
      <Divider />
      <Title>Contact</Title>
      <Paragraph>here is Contact of this web site</Paragraph>
    </Typography>
  );
};

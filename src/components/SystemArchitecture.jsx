import React from "react";
import { Divider, Typography } from "antd";
import Iframe from "react-iframe";

const { Title, Paragraph, Text, Link } = Typography;
const URL =
  "https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1noLlu3wPS8S3mI5EdSd4J-vDcsYt_xRr%26export%3Ddownload";

export const SystemArchitecture = (props) => {
  return (
    <Typography>
      <Title>System Architecture</Title>
      <Iframe url={URL} frameborder="0" width="100%" height="353px"></Iframe>
      <Paragraph>
        Release contents By S3 and Cloud Front.<br></br>
        Realization of HTTPS communication by Route 53 and Cloud Front, AWS
        Certificate Manager.
      </Paragraph>
      <Title>Feature to be updated</Title>
      Login function using Cognito<br></br>
      Implementation of dynamic processing functions using Lambda and
      Lambda@edge and more ...
    </Typography>
  );
};

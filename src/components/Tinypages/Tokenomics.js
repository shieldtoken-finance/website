import { Col, Row, Divider, Card, Typography } from "antd";
import TokenCard from "../Tokenomics";

const { Paragraph } = Typography;

function Tokenomics(props) {
  return (
    <div className="lg:mx-20 mx-4 py-5">
      <Row gutter={[10, 10]}>
        <Col xs={24} md={6}>
          <p className="text-base text-white">Tokenomics</p>
          <Divider style={{ backgroundColor: "white" }} />
        </Col>
        <Col xs={24} md={18} className="w-full">
          <Row gutter={[10, 10]}>
            <Col xs={24} md={8}>
              <TokenCard title="Ticker" text="SDF" />
            </Col>
            <Col xs={24} md={8}>
              <TokenCard title="Token type" text="BEP20" />
            </Col>
            <Col xs={24} md={8}>
              <Card
                className="overflow-hidden"
                hoverable
                bodyStyle={{
                  backgroundColor: "#ffffff",
                  height: "300px",
                }}
              >
                <div className="h-full flex flex-col justify-center items-center space-y-3">
                  <span className="text-xl text-black text-center block">
                    Contract address
                  </span>
                  <Paragraph
                    className="text-green-500"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                    copyable={{
                      text: "0x5a054554b3f0c75063d29250984a921402e1e3a7",
                    }}
                  >
                    <span className="text-2xl text-green-500 text-center">
                      0x5a054..
                    </span>
                  </Paragraph>
                </div>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bscscan.com/token/0x5a054554b3f0c75063d29250984a921402e1e3a7"
              >
                <TokenCard title="BscScan" text="Click here" />
              </a>
            </Col>
            <Col xs={24} md={8}>
              <TokenCard title="Total token supply" text="100,000,000 SDF" />
            </Col>
            <Col xs={24} md={8}>
              <TokenCard
                title="Circulating supply"
                text="79,299,256 SDF (as of 5:24 AM UTC 15.4.2021"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Tokenomics;

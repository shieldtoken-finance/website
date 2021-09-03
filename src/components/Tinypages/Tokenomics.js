import { Col, Row, Divider, Card, Typography } from "antd";
import TokenCard from "../Tokenomics";

const { Paragraph } = Typography;

function Tokenomics(props) {
  return (
    <div className="lg:mx-20 mx-4 py-5">
      <Row gutter={[10, 10]}>
        <Col xs={24} md={6}>
          <p className="text-base text-white font-extrabold">Tokenomics</p>
          <Divider style={{ backgroundColor: "white" }} />
        </Col>
        <Col xs={24} md={18} className="w-full">
          <Row gutter={[10, 10]}>
            <Col xs={24} md={8}>
              <TokenCard title="Ticker" text="$BLENS" />
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
                      text: "0x1f2cd43797806664d0bce1ec4284ac83840d0bf1",
                    }}
                  >
                    <span className="text-2xl text-green-500 text-center">
                      0x1f2..
                    </span>
                  </Paragraph>
                </div>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bscscan.com/token/0x1f2cd43797806664d0bce1ec4284ac83840d0bf1"
              >
                <TokenCard title="BscScan" text="Click here" />
              </a>
            </Col>
            <Col xs={24} md={8}>
              <TokenCard title="Total token supply" text="1,000,000 BLENS" />
            </Col>
            <Col xs={24} md={8}>
              <TokenCard
                title="Bonus reward"
                text="All investors are rewarded with BUSD"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Tokenomics;

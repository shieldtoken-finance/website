import { Col, Row, Divider, Timeline } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";

function RoadMap(props) {
  return (
    <div className="lg:mx-20 mx-4">
      <Row gutter={[10, 10]}>
        <Col xs={24} md={6}>
          <p className="text-base text-black font-bold">Road Map</p>
          <Divider />
        </Col>
        <Col xs={24} md={14}>
          <Timeline mode="left" className="text-lg">
            <Timeline.Item
              style={{ fontSize: "18px" }}
              dot={<CheckCircleFilled style={{ fontSize: "18px" }} />}
              label="PHASE ONE"
            >
              Launch on PancakeSwap.
            </Timeline.Item>
            <Timeline.Item style={{ fontSize: "18px" }}>
              Distributing airdrop tokens.
            </Timeline.Item>
            <Timeline.Item style={{ fontSize: "18px" }}>
              Launch on B-list exchanges.
            </Timeline.Item>

            <Timeline.Item style={{ fontSize: "18px" }}>
              Establish the BlockLens army.
            </Timeline.Item>
            <Timeline.Item style={{ fontSize: "18px" }}>
              List on Coingecko.
            </Timeline.Item>

            <Timeline.Item style={{ fontSize: "18px" }}>
              List on Coinmarketcap.
            </Timeline.Item>

            <Timeline.Item style={{ fontSize: "18px" }}>
              List on Nomics.
            </Timeline.Item>
            <Timeline.Item style={{ fontSize: "18px" }} label="PHASE TWO">
              Launch of Website V3.
            </Timeline.Item>
            <Timeline.Item style={{ fontSize: "18px" }}>
              BlensGame token rewards.
            </Timeline.Item>

            <Timeline.Item style={{ fontSize: "18px" }}>
              Get audited by Dessert Finance.
            </Timeline.Item>

            <Timeline.Item style={{ fontSize: "18px" }}>
              15,000 hodlers & $25 million MarketCap.
            </Timeline.Item>

            <Timeline.Item style={{ fontSize: "18px" }}>
              Tracking on Coinbase & Blockfolio.
            </Timeline.Item>

            <Timeline.Item style={{ fontSize: "18px" }} label="PHASE FOUR">
              50,000 hodlers and $250 million MarketCap.
            </Timeline.Item>
            <Timeline.Item style={{ fontSize: "18px" }}>
              Website V4 with built in Dex.
            </Timeline.Item>

            <Timeline.Item style={{ fontSize: "18px" }}>
              Launch of NFTs, NFT Marketplace and Metaverse.
            </Timeline.Item>

            <Timeline.Item style={{ fontSize: "18px" }}>
              Custom BlockLens Tesla Model S giveaway.
            </Timeline.Item>

            <Timeline.Item style={{ fontSize: "18px" }}>
              Listing on A list exchanges.
            </Timeline.Item>
          </Timeline>
        </Col>
      </Row>
    </div>
  );
}

export default RoadMap;

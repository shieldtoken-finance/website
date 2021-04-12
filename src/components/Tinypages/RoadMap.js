import { Col, Row, Divider, Timeline } from "antd";

function RoadMap(props) {
  return (
    <div className="lg:mx-20 mx-4">
      <Row gutter={[10, 10]}>
        <Col xs={24} md={6}>
          <p className="text-base text-primary">Road Map</p>
          <Divider />
        </Col>
        <Col xs={24} md={14}>
          <Timeline mode="left" className="text-lg">
            <Timeline.Item style={{ fontSize: "18px" }} label="2021-04-09">
              Presale
            </Timeline.Item>
            <Timeline.Item style={{ fontSize: "18px" }} label="2021-04-10">
              Airdrop distribution
            </Timeline.Item>
            <Timeline.Item style={{ fontSize: "18px" }} label="2021-04-10">
              Pancakes Listing and LP burn
            </Timeline.Item>

            <Timeline.Item style={{ fontSize: "18px" }}>Livecoin</Timeline.Item>
            <Timeline.Item style={{ fontSize: "18px" }}>
              Coinghecko
            </Timeline.Item>

            <Timeline.Item style={{ fontSize: "18px" }}>
              Coinmarketcap
            </Timeline.Item>
            <Timeline.Item style={{ fontSize: "18px" }}>
              Partnership
            </Timeline.Item>
            <Timeline.Item style={{ fontSize: "18px" }}>
              CEX Listing
            </Timeline.Item>

            <Timeline.Item style={{ fontSize: "18px" }}>Farming</Timeline.Item>
            <Timeline.Item style={{ fontSize: "18px" }}>Dex</Timeline.Item>
            <Timeline.Item style={{ fontSize: "18px" }}>Lot More</Timeline.Item>
          </Timeline>
        </Col>
      </Row>
    </div>
  );
}

export default RoadMap;

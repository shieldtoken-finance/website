import { Col, Row, Divider, Button } from "antd";

function ViewContract(props) {
  return (
    <div className="bg-gray-200">
      <div className="lg:mx-20 mx-4 py-24">
        <Row gutter={[40, 20]}>
          <Col xs={24} md={6}>
            <p className="text-base text-black font-bold">About Community</p>
            <Divider />
          </Col>
          <Col xs={24} md={14}>
            <p className="text-base lg:text-lg">
              BlockLens is a cryptocurrency that works for you, helps you
              increase your holdings over time. We offer complete transparency
              and the latest security to all our holders.
            </p>

            {/* <a
              rel="noreferrer"
              href="https://res.cloudinary.com/dus4sijdt/image/upload/v1619697146/sdf_white_paper_2_1_e2ri0m.pdf"
              target="_blank"
            > */}
            <div className="flex justify-center lg:justify-start">
              <Button
                type="primary"
                shape="round"
                className=" lg:w-1/2   font-semibold my-5"
                size="large"
              >
                White paper coming soon
              </Button>
            </div>
            {/* </a> */}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ViewContract;

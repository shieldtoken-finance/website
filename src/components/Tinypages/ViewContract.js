import { Col, Row, Divider, Button } from "antd";

function ViewContract(props) {
  return (
    <div className="bg-blue-200">
      <div className="lg:mx-20 mx-4 py-24">
        <Row gutter={[10, 10]}>
          <Col xs={24} md={6}>
            <p className="text-base text-primary">About Community</p>
            <Divider />
          </Col>
          <Col xs={24} md={14}>
            <p className="text-base lg:text-lg">
              The project is owned by more than 100 crypto enthusiasts with
              different skills that has come together to curtail the excesses in
              different Binance chain rugpulls and abandoned project, with the
              aim to develop a crypto platform that would give investors the
              100% assurance of continuous development till alot is put in
              place.
            </p>

            <a
              rel="noreferrer"
              href="https://bscscan.com/token/0x5a054554b3f0c75063d29250984a921402e1e3a7"
              target="_blank"
            >
              <div className="flex justify-center lg:justify-start">
                <Button
                  type="primary"
                  shape="round"
                  className=" lg:w-1/2   font-semibold my-5"
                  size="large"
                >
                  View $SDF on bscscan
                </Button>
              </div>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ViewContract;

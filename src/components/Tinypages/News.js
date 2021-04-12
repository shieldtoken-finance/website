import { Col, Row, Divider, Space, Tag } from "antd";
function News(props) {
  return (
    <div className="bg-blue-200">
      <div className="lg:mx-20 mx-4 py-24">
        <Row gutter={[10, 10]}>
          <Col xs={24} md={6}>
            <p className="text-base text-primary">Articles</p>
            <Divider />
          </Col>
          <Col xs={24} md={14}>
            <Row gutter={[5, 5]} className="flex justify-end w-full">
              <Col xs={24} md={12}>
                <Space className="my-2">
                  <Tag color="blue">Meduim post</Tag>
                  <Tag color="blue">2021-04-11</Tag>
                </Space>
                <h2 className="hero-text text-black lg:text-xl text-lg font-extrabold">
                  <a
                    className="text-black"
                    rel="noreferrer"
                    target="_blank"
                    href="https://medium.com/@ShieldFinance1/shield-finance-is-a-community-project-with-the-aim-of-providing-financial-solutions-and-stability-5dd35c6a7a50"
                  >
                    Shield Finance Is A Community Project On Binance Smart Chain
                  </a>
                </h2>
              </Col>
              <Col xs={24} md={12}>
                <Space className="my-2">
                  <Tag color="blue">Meduim post</Tag>
                  <Tag color="blue">2021-04-11</Tag>
                </Space>
                <h2 className="hero-text text-black lg:text-xl text-lg font-extrabold">
                  <a
                    className="text-black"
                    rel="noreferrer"
                    target="_blank"
                    href="https://medium.com/@ShieldFinance1/we-are-getting-set-to-bring-the-nextbigthing-to-the-cryptospace-be-on-the-lookout-af176c06e05d"
                  >
                    We are getting set to bring the #NEXTBIGTHING
                  </a>
                </h2>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default News;

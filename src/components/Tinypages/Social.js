import { Card } from "antd";
import Icon, {
  TwitterCircleFilled,
  MediumCircleFilled,
  RedditCircleFilled,
} from "@ant-design/icons";

function Social(props) {
  const Telegram = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M385.268 121.919l-210.569 129.69c-11.916 7.356-17.555 21.885-13.716 35.323l22.768 80c1.945 6.821 8.015 11.355 14.999 11.355.389 0 .782-.014 1.176-.043 7.466-.542 13.374-6.103 14.367-13.515l5.92-43.866a25.915 25.915 0 018.001-15.45l173.765-161.524a13.817 13.817 0 001.618-18.545 13.836 13.836 0 00-18.329-3.425zM214.32 290.478a46.364 46.364 0 00-14.323 27.655l-2.871 21.278-16.527-58.072c-1.343-4.704.635-9.791 4.805-12.365l154.258-95.007L214.32 290.478z" />
      <path d="M503.67 37.382a23.52 23.52 0 00-23.698-4.005L15.08 212.719C5.873 216.27-.047 224.939 0 234.804c.048 9.874 6.055 18.495 15.316 21.965l108.59 40.529 42.359 136.225a23.517 23.517 0 0015.703 15.566 23.49 23.49 0 0021.66-4.31l63.14-51.473a8.642 8.642 0 0110.528-.295l113.883 82.681a23.476 23.476 0 0013.823 4.511 23.6 23.6 0 008.517-1.596c7.486-2.895 12.93-9.312 14.56-17.163l83.429-401.309a23.547 23.547 0 00-7.838-22.753zM491.536 55.99l-83.428 401.308c-.302 1.45-1.346 2.053-1.942 2.284-.6.232-1.785.489-2.997-.393l-113.887-82.685a28.982 28.982 0 00-17.052-5.531 29.013 29.013 0 00-18.347 6.519l-63.154 51.485c-1.124.92-2.291.756-2.885.577-.598-.18-1.665-.69-2.099-2.086L141.9 286.462a10.203 10.203 0 00-6.173-6.527L22.462 237.662c-1.696-.635-2.057-1.958-2.062-2.957-.005-.99.343-2.307 2.023-2.955L487.316 52.409l.008-.003c1.51-.583 2.627.087 3.159.537.534.455 1.384 1.455 1.053 3.047z" />
      <path d="M427.481 252.142c-5.506-1.196-10.936 2.299-12.131 7.804l-1.55 7.14c-1.195 5.505 2.299 10.936 7.804 12.131a10.25 10.25 0 002.174.234c4.695 0 8.92-3.262 9.958-8.037l1.55-7.14c1.194-5.505-2.301-10.936-7.805-12.132zM417.281 299.122c-5.512-1.195-10.938 2.299-12.132 7.804L381.69 414.977c-1.195 5.505 2.299 10.936 7.803 12.131.73.158 1.457.234 2.174.234 4.696 0 8.92-3.262 9.958-8.037l23.459-108.052c1.195-5.505-2.299-10.936-7.803-12.131z" />
    </svg>
  );
  return (
    <div className="lg:mx-20 mx-4 py-24 h-full">
      <Card
        style={{
          backgroundColor: "#fe9601",
          height: 150,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23DCEFFA' fill-opacity='0.13' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E")`,
        }}
      >
        <div className="flex justify-center items-center   lg:space-x-6 space-x-3 h-24">
          <a
            href="https://twitter.com/BlensOfficial"
            rel="noreferrer"
            target="_blank"
          >
            <div className="lg:h-14 h-10 lg:w-14 w-10 rounded-full shadow bg-white flex justify-center items-center">
              <TwitterCircleFilled
                style={{ color: "black" }}
                className="lg:text-3xl text-xl"
              />
            </div>
          </a>
          <a
            href="https://t.me/BlocklensOfficial"
            rel="noreferrer"
            target="_blank"
          >
            <div className="lg:h-14 h-10 lg:w-14 w-10 rounded-full shadow bg-white flex justify-center items-center">
              <Icon
                component={Telegram}
                style={{ color: "black" }}
                className="lg:text-3xl text-xl"
              />
            </div>
          </a>

          <a
            href="https://medium.com/@BlensOfficial"
            rel="noreferrer"
            target="_blank"
          >
            <div className="lg:h-14 h-10 lg:w-14 w-10 rounded-full shadow bg-white flex justify-center items-center">
              <MediumCircleFilled
                style={{ color: "black" }}
                className="lg:text-3xl text-xl"
              />
            </div>
          </a>

          <a
            rel="noreferrer"
            href="https://www.reddit.com/r/BlockLens_Official/"
            target="_blank"
          >
            <div className="lg:h-14 h-10 lg:w-14 w-10 rounded-full shadow bg-white flex justify-center items-center">
              <RedditCircleFilled
                style={{ color: "black" }}
                className="lg:text-3xl text-xl"
              />
            </div>
          </a>
        </div>
      </Card>
    </div>
  );
}

export default Social;

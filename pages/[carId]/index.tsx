import Header from "../../components/header";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import api from "../../cars.json";

const CarId: React.FC<{}> = (props) => {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  return (
    <>
      <Header />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          paddingLeft: "8%",
          paddingRight: "8%",
          paddingTop: 53,
          background: "linear-gradient(to right, #FFFFFF, #D8D7D7)",
          paddingBottom: 20,
        }}
      >
        {api.map((item) => {
          if (index === item.index) {
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg"
                    width={91}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: 39,
                    }}
                  >
                    <label
                      style={{ font: "normal normal bold 50px/67px Segoe UI" }}
                    >
                      Ferrari California
                    </label>
                    <label
                      style={{ font: "normal normal 300 40px/53px Segoe UI" }}
                    >
                      {`$${item.preco}/day`}
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    onClick={() => {
                      router.push("/");
                    }}
                    style={{
                      border: "1px solid #313136",
                      borderRadius: "25px",
                      width: 177,
                      height: 50,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaArrowLeft size={16} color="#313136" />
                    <label
                      style={{
                        font: "normal normal 300 16px/21px Segoe UI",
                        color: "#313136",
                        marginLeft: 12,
                      }}
                    >
                      Back to catalog
                    </label>
                  </div>

                  <img
                    src={item.image_url}
                    width="600"
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: 400,
                      alignItems: "flex-start",
                    }}
                  >
                    <label
                      style={{ font: "normal normal bold 50px/67px Segoe UI" }}
                    >
                      {item.index + 1}
                    </label>
                    <label
                      style={{ font: "normal normal 300 30px/40px Segoe UI" }}
                    >
                      {item.cor}
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 50,
                    marginTop:20
                  }}
                >
                  <div
                    style={{
                      width: 177,
                      height: 50,
                      backgroundColor: "#313136",
                      borderRadius: 25,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <label
                      style={{
                        font: "normal normal 300 16px/21px Segoe UI",
                        color: "white",
                        marginRight: 12,
                      }}
                    >
                      Book now
                    </label>
                    <FaArrowRight size={16} color="white" />
                  </div>
                </div>
              </>
            );
          }
        })}

        <Carousel
          onClickItem={(index, item) => {
            setIndex(index);
          }}
          onChange={(index) => {
            setIndex(index);
          }}
          centerMode={true}
          swipeable={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          dynamicHeight={true}
          infiniteLoop={true}
          centerSlidePercentage={40}
          showArrows={true}
        >
          <div
            style={{
              width: 300,
              paddingTop: 20,
              paddingBottom: 20,
              borderRadius: 10,
              background: "linear-gradient(to left, transparent, grey)",
            }}
          >
            <img
              src="https://s2.glbimg.com/2E4btLuyJ-vsC6ee71QpTDTeJ98=/0x0:620x380/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/D/q/lAaHVoRR6Rd3nPyyMD3g/2014-02-12-ferrari.jpg"
              style={{ width: 250, marginLeft: 20 }}
            />
          </div>
          <div
            style={{
              width: 300,
              paddingTop: 20,
              paddingBottom: 20,
              borderRadius: 10,
              background: "linear-gradient(to left, transparent, grey)",
            }}
          >
            <img
              src="https://s2.glbimg.com/-BaB2Iy-sUs04z3r-7nQEmz9k_g=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/o/j/yoefa7RxG4f4uR0GeV5A/2020-02-03-246bdb40-ferrari-f8-spider-1-1160x653.jpg"
              style={{ width: 250, marginLeft: 20 }}
            />
          </div>
          <div
            style={{
              width: 300,
              paddingTop: 20,
              paddingBottom: 20,
              borderRadius: 10,
              background: "linear-gradient(to left, transparent, grey)",
            }}
          >
            <img
              src="https://s2.glbimg.com/7pQVZkqPmnp9oIrdt56AkvxLVis=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/a/Q/7HSRbBQtG2w4g8RXM0Ow/2020-05-29-foto.jpg"
              style={{ width: 250, marginLeft: 20 }}
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CarId;

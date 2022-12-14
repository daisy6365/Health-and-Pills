import Footer from "../components/layouts/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import { profile } from "../store/actions/user";
import UserChart from "../components/user/chart/UserChart";
import Loading from "../components/layouts/Loading";
import Landing from "./landing/Landing";

const colorTheme = {
  borderColor: "#537CFE",
  bgColor: "#537CFE",
  bgColorFrom: "#537CFE",
  bgColorTo: "#6A53FE",
  disableColor: "#E1E1E1",
};
const HomeWrapper = styled.div`
  padding: 80px 20px 0px 20px;
  @media screen and (max-width: 280px) {
    padding: 50px 20px 0px 20px;
  }
`;
const HomeTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserTitleWrapper = styled.div`
  font-size: 30px;
  font-weight: 600;
  position: relative;
  opacity: 0;
  animation: fadeIn 1s linear;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 280px) {
    font-size: 20px;
  }
`;
const UserTitle = styled.div`
  position: relative;
  display: inline-block;
  z-index: 2;
`;

const UserNameLine = styled.div`
  position: absolute;
  height: 8px;
  bottom: -4px;
  /* width: 100%; */
  z-index: -1;
  background-color: ${(props) => props.bgColor};
  animation: lineDraw 0.1s linear;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
  @keyframes lineDraw {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const UserContent = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 20px 15px;
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  background: linear-gradient(
    to bottom,
    ${colorTheme.bgColorFrom},
    ${colorTheme.bgColorTo}
  );
  border-radius: 10px;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
  & div i {
    margin-right: 10px;
  }
  @media screen and (max-width: 420px) {
    font-size: 16px;
  }
  @media screen and (max-width: 280px) {
    font-size: 10px;
  }
`;
const UserContentDisable = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 20px 15px;
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  background-color: #c1c1c1;
  border-radius: 10px;
  font-size: 20px;
  margin-top: 20px;
  cursor: default;
  & div i {
    margin-right: 10px;
  }
  @media screen and (max-width: 420px) {
    font-size: 16px;
  }
  @media screen and (max-width: 280px) {
    font-size: 10px;
  }
`;
const IconWrapper = styled.div`
  width: 35px;
  text-align: center;
  display: flex;
  align-items: center;
`;

const ChartWapper = styled.div`
  background-color: transparent;
  border: 1px solid ${colorTheme.bgColor};
  height: 40vh;
  border-radius: 5px;
  max-height: 400px;
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InbodyButton = styled.button`
  background: linear-gradient(
    to bottom,
    ${colorTheme.bgColorFrom},
    ${colorTheme.bgColorTo}
  );
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  border-radius: ${(props) => props.borerRadius};
  color: ${(props) => props.color};
  @media screen and (max-width: 280px) {
    font-size: 10px;
    width: 80%;
  }
`;

const Main = ({ user }) => {
  const navigate = useNavigate();
  return (
    <HomeWrapper>
      <HomeTitleWrapper style={{ position: "relative" }}>
        <UserTitleWrapper>
          <div style={{ marginBottom: "10px" }}>
            <UserTitle>
              {user.userProfileNickname}
              <UserNameLine bgColor={colorTheme.bgColor} />
            </UserTitle>
            <span>???</span>
          </div>
          <div>???????????????</div>
        </UserTitleWrapper>
        <div>
          {/* <HeartBeat /> */}
          <img
            src={process.env.PUBLIC_URL + "pillLogo.png"}
            width={72}
            height={72}
          />
        </div>
      </HomeTitleWrapper>
      <div>
        <div>
          <UserContent
            border={"none"}
            color={"#fff"}
            bgColor={colorTheme.bgColor}
            onClick={() => {
              navigate("/form");
            }}
          >
            <div style={{ display: "flex" }}>
              <IconWrapper>
                <i className="fa-solid fa-cloud-question"></i>
              </IconWrapper>
              ????????? ?????? ????????? ????????????????
            </div>
            <div>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </UserContent>
          <UserContent
            border={"none"}
            color={"#fff"}
            bgColor={colorTheme.bgColor}
            onClick={() => 
              {navigate("/event")}}
          >

            <div style={{ display: "flex" }}>
              <IconWrapper>
                <i className="fa-solid fa-calendar-star"></i>
              </IconWrapper>
              ???????????? ????????? ????????????
            </div>
            <div>
              <div>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </UserContent>
        </div>
      </div>
      <ChartWapper>
        {user.userProfileHeight !== 0 ? (
          <UserChart />
        ) : (
          <InbodyButton
            padding={"20px"}
            width={"280px"}
            fontSize={"18px"}
            borerRadius={"6px"}
            color={"#fff"}
            onClick={() =>
              navigate("/profiles", {
                state: {
                  infoType: "inBody",
                  title: "??? ????????? ??????",
                },
              })
            }
          >
            ????????? ????????? ??????????????????
          </InbodyButton>
        )}
      </ChartWapper>
    </HomeWrapper>
  );
};

const loadCheck = () => {
  return sessionStorage.getItem("ACCESS_TOKEN") !== null ? true : false;
};

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const mainLoader = loadCheck();
  useEffect(() => {
    if (mainLoader) {
      dispatch(profile());
    }
  }, []);
  const renderToNext = () => {};
  if (mainLoader) {
    if (user.isLogin && user.data !== null && user.data !== "") {
      return (
        <>
          <Main user={user.data} />
          <Footer />
        </>
      );
    }
    if (user.isLogin && user.data === null && !user.loading) {
      return <Navigate to="/require" />;
    }
    if (user.isLogin && user.data === "") {
      return <Navigate to="/require" />;
    }
  } else {
    return <Landing />;
  }
};

export default Home;

import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../testData";
import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

function HomeAdmin() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics - Registered Users" grid dataKey="Registered Users" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default HomeAdmin
import Company from "./Company";
import cisco from "../../assets/cisco.png";
import volvo from "../../assets/volvo.png";
import deloitte from "../../assets/deloitte.png";
import walmart from "../../assets/walmart.png";
import okta from "../../assets/okta.png";

const Partner = () => {
  return (
    <div className="my-[50px] w-4/5 mx-auto pb-[10px]">
      <h5 className="pt-[20px] font-light text-[18px]">Trusted by 45M+ users</h5>
      <div className="w-full h-[80px] flex mt-[10px]">
        <Company img={walmart} />
        <Company img={cisco} />
        <Company img={volvo} />
        <Company img={deloitte} />
        <Company img={okta} />
      </div>
    </div>
  );
}
export default Partner;

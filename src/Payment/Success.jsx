import { GiCheckMark } from "react-icons/gi";
import { useSearchParams } from "react-router-dom";

function Success() {
  const [search] = useSearchParams();
  const data = search.get("data");
  let info = atob(data);//it decodes the base64 encoded data
  // btoa it encodes the data
  const paymentData = JSON.parse(info);
  console.log(info);
  console.log(paymentData);

  return (
    
    <div>
      <div className="border-2 border-red-500  w-96 m-auto mt-10 flex  flex-col  justify-center items-center  ">
        <div className="border-2 border-green-500  h-52 w-52 flex  justify-center items-center  rounded-full">
          <GiCheckMark color="green" size={100} />
        </div>
        <div>
          <h1>Payment Success</h1>
          <h1>Status:{paymentData.status}</h1>
          <h1>Total Amount :Rs.{paymentData.total_amount}</h1>
          <h1>Transaction Code :{paymentData.transaction_code}</h1>
        </div>
      </div>
    </div>
  );
}

export default Success;

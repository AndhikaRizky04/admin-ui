import { useEffect, useState } from "react";
import Card from "../../Elements/Card";
import CompositionExample from "../../Elements/GaugeChart";
import { Icon } from "../../Elements/Icon";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CardGoal = () => {
  const [goalData, setGoalData] = useState({ presentAmount: 0, targetAmount: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const value =
    goalData.targetAmount > 0
      ? (goalData.presentAmount * 100) / goalData.targetAmount
      : 0;

  const getData = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        throw new Error("No refresh token found");
      }

      const response = await axios.get(
        "https://jwt-auth-eight-neon.vercel.app/goals",
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      const goal = response?.data?.data?.[0];
      if (goal) {
        setGoalData({
          presentAmount: goal.present_amount,
          targetAmount: goal.target_amount,
        });
      } else {
        throw new Error("Invalid data structure from API");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          localStorage.removeItem("refreshToken");
          navigate("/login");
        } else {
          console.error("API error:", error.response);
        }
      } else {
        console.error("Error:", error);
      }
      setError("Failed to fetch goals");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Card
      title="Goals"
      desc={
        <div className="p-2">
          <div className="flex justify-between">
            <div className="flex">
              <span className="text-2xl font-bold me-4 self-center">
                ${goalData.presentAmount}
              </span>
              <div className="p-2 bg-gray-05 rounded-md box-border">
                <Icon.Edit />
              </div>
            </div>
            <div>Nov, 2023</div>
          </div>
          <div className="border-b-2 my-4"></div>
          <div className="flex justify-between">
            <div>
              <div className="flex mt-3 mb-10">
                <div>
                  <Icon.Award />
                </div>
                <div className="ms-2">
                  <span className="text-gray-02">Target Achieved</span>
                  <br />
                  <span className="font-bold text-xl">
                    ${goalData.targetAmount}
                  </span>
                </div>
              </div>
              <div className="flex">
                <div>
                  <Icon.Target />
                </div>
                <div className="ms-2">
                  <span className="text-gray-02">This Month Target</span>
                  <br />
                  <span className="font-bold text-xl">
                    ${goalData.presentAmount}
                  </span>
                </div>
              </div>
            </div>
            <div className="ms-4 text-center">
              <CompositionExample desc={value} />
              <div className="flex justify-between">
                <span className="text-gray-03">$0</span>
                <span className="font-bold text-2xl">12K</span>
                <span className="text-gray-03">$20K</span>
              </div>
              <div className="mt-2">Target vs Achievement</div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default CardGoal;

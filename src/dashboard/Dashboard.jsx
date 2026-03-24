import React, { useState } from "react";
import { Header } from "../components/Header";
import { CiGrid41 } from "react-icons/ci";
import { STORAGE_KEY, Types } from "../constants";
import { GithubProfileCard } from "../containers/GithubProfileCard";
import { GithubRepoCard } from "../containers/GithubRepoCard";
import { DevToCard } from "../containers/DevToCard";
import { StackOverflowCard } from "../containers/StackOverflowCard";
import { HackerNewsCard } from "../containers/HackerNewsCard";
import { useWidgetContext } from "../hooks/useWidgetContext";

export const Dashboard = () => {
  const { isLoading, widgets, widgetRefreshFunc } = useWidgetContext();

  // React.useEffect(() => {
  //   try {
  //     setIsLoading(true);
  //     const response = localStorage.getItem(STORAGE_KEY);
  //     setData(response ? JSON.parse(response) : []);
  //   } catch (error) {
  //     console.error("Error fetching data from localStorage:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, []);

  return (
    <>
      <Header refreshWidget={widgetRefreshFunc} />
      {widgets?.length ? (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {widgets?.map((widget, index) => {
            if (widget?.type === Types.GithubProfile) {
              return <GithubProfileCard data={widget?.data} index={index} />;
            }
            if (widget?.type === Types.GithubRepo) {
              return <GithubRepoCard data={widget?.data} index={index} />;
            }
            if (widget?.type === Types.DevTo) {
              return <DevToCard data={widget?.data} index={index} />;
            }
            if (widget?.type === Types.StackOverflow) {
              return <StackOverflowCard data={widget?.data} index={index} />;
            }
            if (widget?.type === Types.HackerNews) {
              return <HackerNewsCard data={widget?.data} index={index} />;
            }
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="bg-gray-200 text-5xl text-gray-700 h-20 w-20 flex items-center justify-center rounded-[15px] mt-40">
            <CiGrid41 />
          </div>
          <div>
            <h2 className="font-medium mt-2 text-[20px]">No widgets yet</h2>
          </div>

          <div>
            <p className="text-gray-500 text-[14px] mt-1 w-[400px] text-center">
              Click "Add Widget" to start building your personalized analytics
              dashboard
            </p>
          </div>
        </div>
      )}
    </>
  );
};

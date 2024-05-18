import AuthDetail from "@/app/components/elements/authDetail/AuthDetail";
import { useSession } from "next-auth/react";
import { ChartData } from "@/store/slice/AuthChartsSlice";
import styles from "./styles/ChartView.module.scss";
import Reach from "./Reach";

import ProgressMeter from "./ProgressMeter";
import ChartDisp from "./ChartDisp";
import Chart from "../../components/elements/chart/Chart";
import Button from "../../components/elements/button/Button";

interface ChartProps {
  chartData: ChartData | null
}

export default function ChartIndex({ chartData }: ChartProps) {
  const { data: session } = useSession();
  const authName = session?.user?.name;

  const userData = {
    userName: chartData?.userEmail,
    userImage: chartData?.userImage
  }

  const reachData = {
    name: chartData?.reachName,
    userName: chartData?.userName,
    userImage: chartData?.userImage
  }

  const skillDatas = {
    userName: chartData?.userName,
    userImage: chartData?.userImage,
    skills: chartData?.skills
  }

  // const progressData = {
  //   actionCount: chartData?.actionCount,
  //   executedCount: chartData?.executedActionCount
  // }

  const chartDispData = {
    createdAt: chartData?.createdAt,
    actionCount: 400,
    executedCount: 245
  }

  return (
    <div className={styles.container}>
      <div className={styles.authDetail_container}>
        <AuthDetail userData={userData} />
      </div>
      <Reach reachData={reachData} />
      <div className={styles.skills_wrapper}>
        <Chart skillDatas={skillDatas} />
        <ProgressMeter progressData={{ actionCount: 400, executedCount: 245 }} />
        <ChartDisp chartDispData={chartDispData} />
      </div>
      {
        authName !== chartData?.userName
          ? <div className={styles.icons_container}>
            <Button buttonName="like" />
            <Button buttonName="favorite" />
            <Button buttonName="create" />
          </div>
          : ''
      }
    </div>
  )
}
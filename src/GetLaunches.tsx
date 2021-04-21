import { useQuery } from "@apollo/client";
import { queryGetLaunches } from "./queries";

interface Rocket {
  rocket_name: string;
}

interface Links {
  video_link: string;
}

interface Launch {
  launch_date_utc: string;
  details: string;
  launch_success: boolean;
  rocket: Rocket;
  links: Links;
}

const GetLaunches = () => {
  const { loading, error, data } = useQuery(queryGetLaunches);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error while fetching datas</p>;
  console.log(data);
  return (
    <>
      {data.launches.map((launch: Launch) => (
        <div key={launch.launch_date_utc}>
          <p>Launch date :{launch.launch_date_utc}</p>
          <p>Details : {launch.details}</p>
          <p>Launch success : {launch.launch_success ? "Yes" : "No"}</p>
          <p>Rocket used : {launch.rocket.rocket_name}</p>
          <a target="blank" href={launch.links.video_link}>
            Video Link
          </a>
        </div>
      ))}
    </>
  );
};

export default GetLaunches;
